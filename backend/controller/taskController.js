const db = require("../config/db");

const getTasks = async (req, res) => {
  try {
    const [result] = await db.query(`select * from task`);
    if (result.length === 0) {
      return res.status(404).json({ message: "tasks not found" });
    }
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const getTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await db.query(`select * from task where id=?`);
    if (result.length === 0) {
      return res.status(404).json({ message: "task not found" });
    }
    return res.status(200).json(result[0]);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
const postTask = async (req, res) => {
  try {
    const { title, description, status } = req.body;

    const [result] = await db.query(
      "INSERT INTO task (title, description, status) VALUES (?, ?, ?)",
      [title, description, status],
    );

    return res.status(201).json({
      message: "Task created",
      id: result.insertId,
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
const putTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const [result] = await db.query(`update task set status=? where id=?`, [
      status,
      id,
    ]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Task not found" });
    }
    return res.status(200).json({
      message: "updated status",
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await db.query(`delete from task where id=?`, [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Task not found" });
    }
    return res.status(200).json({ message: "deleted successfully" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = { getTasks, getTaskById, postTask, putTask, deleteTask };
