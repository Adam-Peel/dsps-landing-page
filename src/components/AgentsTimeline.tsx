import { Container, Stepper, StepperStep, Title } from "@mantine/core";
import {
  IconCircleX,
  IconHistoryToggle,
  IconHomeQuestion,
  IconMessages,
  IconBuildingPlus,
} from "@tabler/icons-react";

export default function AgentTimeline() {
  return (
    <Container size="lg">
      <Title order={2}>We can help you turn this...</Title>

      <div>
        <Stepper active={3} mt={10}>
          <StepperStep
            label="Step 1"
            description="Think about going solo"
            color="green"
            completedIcon={<IconHomeQuestion size={20} />}
          />
          <StepperStep
            label="Step 2"
            description="Get lost in paperwork&nbsp;"
            loading
            color="orange"
            completedIcon={<IconHistoryToggle size={20} />}
          />
          <StepperStep
            label="Step 3"
            description="End up in dead ends"
            color="red"
            completedIcon={<IconCircleX size={20} />}
          />
        </Stepper>
      </div>
      <Title order={2} mt="lg">
        Into this...
      </Title>
      <Stepper active={3} mt={10}>
        <StepperStep
          label="Step 1"
          description="Think about going solo"
          color="green"
          completedIcon={<IconHomeQuestion size={20} />}
        />
        <StepperStep
          label="Step 2"
          description="Get in touch for advice"
          color="green"
          completedIcon={<IconMessages size={20} />}
        />
        <StepperStep
          label="Step 3"
          description="Get on track to sales"
          color="green"
          completedIcon={<IconBuildingPlus size={20} />}
        />
      </Stepper>
    </Container>
  );
}
