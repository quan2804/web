const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        message: 'Danh sách người dùng',
        users: [
            { id: 1, name: 'Nguyen Van A', email: 'a@gmail.com' },
            { id: 2, name: 'Tran Thi B', email: 'b@gmail.com' }
        ]
    });
});

router.get('/:id', (req, res) => {
    const userId = req.params.id;
    res.json({
        message: `Thông tin user ID: ${userId}`,
        user: { id: userId, name: 'Nguyen Van A', email: 'a@gmail.com' }
    });
});

router.post('/', (req, res) => {
    const { name, email } = req.body;
    res.json({
        message: 'Tạo user thành công',
        user: { id: Date.now(), name, email }
    });
});

router.put('/:id', (req, res) => {
    const userId = req.params.id;
    const { name, email } = req.body;
    res.json({
        message: `Cập nhật toàn bộ user ID: ${userId}`,
        user: { id: userId, name, email }
    });
});

router.patch('/:id', (req, res) => {
    const userId = req.params.id;
    const updates = req.body;
    res.json({
        message: `Cập nhật một phần user ID: ${userId}`,
        updates: updates
    });
});

router.delete('/:id', (req, res) => {
    const userId = req.params.id;
    res.json({
        message: `Xóa user ID: ${userId} thành công`
    });
});

module.exports = router;