import { Timeline, TimelineItem, Text, Container } from "@mantine/core";
import {
  IconBriefcase2,
  IconHomeSearch,
  IconHomeMove,
  IconListCheck,
  IconHomeCheck,
  IconShoppingCart,
} from "@tabler/icons-react";
import Link from "next/link";

export default function TimeLine() {
  return (
    <Container>
      <div className="text-center mt-10">Services for property buyers</div>
      <div className="mt-10 pb-12 md:pb-20">
        <Timeline active={5} bulletSize={40} lineWidth={2} reverseActive={true}>
          <TimelineItem
            bullet={<IconListCheck size={20} />}
            title="Getting to know you"
            lineVariant="dotted"
          >
            <Text c="dimmed" size="m">
              We discuss your portfolio preferences to identify the best
              properties for you.
            </Text>
          </TimelineItem>

          <TimelineItem
            bullet={<IconHomeSearch size={20} />}
            title="Property search"
          >
            <Text c="dimmed" size="m">
              With extensive knowledge of the East Midlands especially we will
              conduct a full search of the market to find the best properties
              for you.
            </Text>
          </TimelineItem>

          <TimelineItem
            title="Due dilligence"
            bullet={<IconHomeCheck size={20} />}
          >
            <Text c="dimmed" size="m">
              We will conduct due dilligence of the market, property, area, and
              buyers to help ensure you have all the information necessary to
              make any purchase decisions.
            </Text>
          </TimelineItem>

          <TimelineItem title="Site visits" bullet={<IconHomeMove size={20} />}>
            <Text c="dimmed" size="m">
              We conduct site visits to get a closer view of the property,
              allowing us to identify its features, query the sellers, and best
              advise you on its potential for positive yield. Site visits are
              also crucial to informing our negotiating strategy.
            </Text>
          </TimelineItem>
          <TimelineItem
            title="Negotiations"
            bullet={<IconBriefcase2 size={20} />}
          >
            <Text c="dimmed" size="m">
              We conduct negotiations on your behalf, using our extensive
              property research and knowledge of the market to maximise your
              value.
            </Text>
          </TimelineItem>
          <TimelineItem title="Sold" bullet={<IconShoppingCart size={20} />}>
            <Text c="dimmed" size="m">
              We conduct full after-care upon completion of any sale, working
              with you and your team to finalise any purchase, and close off the
              deal efficiently.
            </Text>
          </TimelineItem>
        </Timeline>
      </div>
    </Container>
  );
}
