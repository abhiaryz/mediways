const crypto = require('crypto');

const verifyPayUHash = (req, res, next) => {
  try {
    const {
      key,
      txnid,
      amount,
      productinfo,
      firstname,
      email,
      status,
      hash
    } = req.body;

    // Get salt from environment variable
    const salt = process.env.PAYU_SALT;

    // For success transactions
    if (status === 'success') {
      const hashString = `${salt}|${status}|||||||||${email}|${firstname}|${productinfo}|${amount}|${txnid}|${key}`;
      const calculatedHash = crypto.createHash('sha512').update(hashString).digest('hex');
      
      if (hash !== calculatedHash) {
        console.error('Hash verification failed:', {
          received: hash,
          calculated: calculatedHash
        });
        return res.status(403).json({
          success: false,
          message: 'Invalid payment verification'
        });
      }
    }

    // For failure transactions
    if (status === 'failure') {
      const hashString = `${salt}|${status}|||||||||${email}|${firstname}|${productinfo}|${amount}|${txnid}|${key}`;
      const calculatedHash = crypto.createHash('sha512').update(hashString).digest('hex');
      
      if (hash !== calculatedHash) {
        console.error('Hash verification failed for failure transaction');
        return res.status(403).json({
          success: false,
          message: 'Invalid payment verification'
        });
      }
    }

    next();
  } catch (error) {
    console.error('Hash verification error:', error);
    res.status(500).json({
      success: false,
      message: 'Payment verification failed'
    });
  }
};

module.exports = verifyPayUHash; 