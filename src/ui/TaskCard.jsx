import { CircleDollar } from "@gravity-ui/icons";
import { Card, Link } from "@heroui/react";
const TaskCard = ({ task }) => {
  console.log(task);
  return (
    <Card className="border">
      <CircleDollar
        aria-label="Dollar sign icon"
        className="text-primary size-6"
        role="img"
      />
      <Card.Header>
        <Card.Title>{task.title}</Card.Title>
        <Card.Description>{task.description}</Card.Description>
      </Card.Header>
      <Card.Footer>
        <Link
          aria-label="Go to Acme Creator Hub (opens in new tab)"
          href="https://heroui.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          Creator Hub
          <Link.Icon aria-hidden="true" />
        </Link>
      </Card.Footer>
    </Card>
  );
};

export default TaskCard;
