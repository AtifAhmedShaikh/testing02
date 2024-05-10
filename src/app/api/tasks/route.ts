import { NextRequest, NextResponse } from "next/server";
import { TodoModel, ITask } from "../../../models/TodoModel";
import connectDB from "api/lib/dbConnection";

connectDB();

export async function GET(request: NextRequest) {
  const todoList: any = await TodoModel.find({});
  if (!todoList?.length) {
    return NextResponse.json({
      message: "Todo list not found",
    });
  }
  return NextResponse.json({
    message: "Todo has fetched  successffully ",
    data: todoList,
  });
}

export async function POST(request: NextRequest) {
  const requestBody = await request.json();
  const { id, username } = requestBody;
  const creaetedTodo = await TodoModel.create({ id, username });
  if (!creaetedTodo) {
    return NextResponse.json({
      message: "Error while Createing Todo ",
    });
  }
  return NextResponse.json({
    message: "Todo has Created successffully ",
    data: creaetedTodo,
  });
}

export async function PUT(request: NextRequest) {
  const requestBody = await request.json();
  const { id, username } = requestBody;
  const updatedTodo = await TodoModel.findOneAndUpdate({ id }, { $set: { username } });
  if (!updatedTodo) {
    return NextResponse.json({
      message: "Error while Updating Todo ",
    });
  }
  return NextResponse.json({
    message: "Todo has Updated successffully ",
    data: updatedTodo,
  });
}

export async function DELETE(request: NextRequest) {
  const requestBody = await request.json();
  const { id } = requestBody;
  const updatedTodo = await TodoModel.findOneAndDelete({ id });
  if (!updatedTodo) {
    return NextResponse.json({
      message: "Error while Updating Todo ",
    });
  }
  return NextResponse.json({
    message: "Todo has Updated successffully ",
    data: updatedTodo,
  });
}
