type Props = {
  id: string;
  title: string;
  complete: boolean;
};

const TodoItem = ({ id, title, complete }: Props) => {
  return (
    <li className="flex gap-1 items-center">
      <input id={id} type="checkbox" className="cursor-pointer peer" />
      <label htmlFor={id} className="peer-checked:line-through peer-checked:text-slate-500 cursor-pointer">{title}</label>
    </li>
  );
};

export default TodoItem;
