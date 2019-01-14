const db = require('../../models')

const listAllMessages = () => {}

const createMessage = async (req, res) => {
  try {
    const {
      senderId, message, recipientId, status,
    } = req.body;

    const contactExists = await db.Contact.findByPk(senderId)

    if (!contactExists) {
      return res
        .status(404)
        .json({ status: 'error', message: 'This contact does not exist' });
    }

    const payload = {
      message,
      recipientId,
      senderId,
      status,
      ContactId: senderId,
    };

    const sentMessage = await db.Sms.create(payload, {
      include: [db.Contact],
    });
    res
      .status(201)
      .json({
        status: 'success',
        message: 'Message Sent',
        data: sentMessage,
      })
  } catch (err) {
    res.status(400).json({status: 'error', message: err.message });
  }
}

module.exports = {
  listAllMessages,
  createMessage,
}
