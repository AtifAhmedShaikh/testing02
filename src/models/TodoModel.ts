import mongoose, { Schema, Document } from 'mongoose';

export interface ITask extends Document {
  id: string;
  username: string;
}

const TaskSchema: Schema = new Schema({
  id: { type: String, required: true },
  username: { type: String, required: true },
});

export const TodoModel = mongoose.models.tasks || mongoose.model<ITask>('tasks', TaskSchema);

export { }