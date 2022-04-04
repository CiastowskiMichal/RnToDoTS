import { Goal } from "../../types/goal";

interface ItemProps {
    item: Goal,
    onDeleteGoal: (goal: Goal) => void
};

export default ItemProps;