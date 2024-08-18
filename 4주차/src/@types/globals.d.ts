interface DoItType {
  title: string;
  description: string;
  startTime: Date;
  endTime: Date;
  done: boolean;
  archived: boolean;
}

interface TodoListType {
  id: string;
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  done: boolean;
  archived: boolean;
}

type NoonType = "오전" | "오후";
type StatusType = "모두" | "할일" | "한일" | "보관";
