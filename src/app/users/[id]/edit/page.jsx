import { updateUser } from "@/app/lib/actions";
import { getUserByID } from "@/app/lib/data";
import { FloppyDisk } from "@gravity-ui/icons";
import {
  Button,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";

const EditPage = async ({ params }) => {
  const { id } = await params;
  const user = await getUserByID(id);

  const updataUserWraper = async (formData) => {
    "use server";
    return updateUser(id, formData);
  };

  return (
    <div>
      <p>Editing user: {user.name}</p>
      <div className="mt-4">
        <Form action={updataUserWraper} className="w-full max-w-96">
          <Fieldset>
            <FieldGroup>
              <TextField defaultValue={user?.name} isRequired name="name">
                <Label>Name</Label>
                <Input placeholder="John Doe" />
              </TextField>
              <TextField
                isRequired
                defaultValue={user?.email}
                name="email"
                type="email"
              >
                <Label>Email</Label>
                <Input placeholder="john@example.com" />
              </TextField>
              <TextField isRequired defaultValue={user?.age} name="age">
                <Label>Age</Label>
                <Input placeholder="Your age" />
              </TextField>
              <TextField isRequired defaultValue={user?.role} name="role">
                <Label>Role</Label>
                <Input placeholder="Your role" />
              </TextField>
            </FieldGroup>
            <Fieldset.Actions>
              <Button type="submit">
                <FloppyDisk />
                Update
              </Button>
              <Button type="reset" variant="secondary">
                Cancel
              </Button>
            </Fieldset.Actions>
          </Fieldset>
        </Form>
      </div>
    </div>
  );
};

export default EditPage;
