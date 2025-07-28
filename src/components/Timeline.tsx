import { Timeline, TimelineItem, Text, Container, Title } from "@mantine/core";
import {
  IconBriefcase2,
  IconHomeSearch,
  IconHomeMove,
  IconListCheck,
  IconHomeCheck,
  IconShoppingCart,
} from "@tabler/icons-react";

import classes from "@/app/styling/EstateAgentsGrid.module.css";
import { PropertyStatsGrid } from "./PropertyStats";

export default function TimeLine() {
  return (
    <Container
      style={{
        minHeight: "100vh",
        alignContent: "center",
      }}
      size="lg"
      id="buyers"
    >
      <div className="text-center mt-20">
        <Title className={classes.title} order={2}>
          Full support services for property buyers.
        </Title>
      </div>
      <div className="mt-10">
        If you're looking to either purchase your own home, or expand your
        property portfolio, then take advantage of our expertise. We provide a
        thorough service from the initial property search through to completion
        of sales to ensure that you obtain the best information to make a
        purchasing decision, and the best value for any purchases you do choose
        to make.
      </div>
      <div className="mt-10 pb-12 md:pb-20">
        <Timeline active={5} bulletSize={40} lineWidth={2} reverseActive={true}>
          <TimelineItem
            bullet={<IconListCheck size={20} />}
            title="Getting to know you"
          >
            <Text className={classes.shadedtext} size="m">
              We discuss your preferences to identify the best properties for
              you. We consider your portfolio mix, your preferred areas and
              types of investment or purchase, and market trends to draw up a
              list of criteria for our property search.
            </Text>
          </TimelineItem>

          <TimelineItem
            bullet={<IconHomeSearch size={20} />}
            title="Property search"
          >
            <Text className={classes.shadedtext} size="m">
              With extensive knowledge of the East Midlands especially we will
              conduct a full search of the market to find the best properties
              for you.
            </Text>
          </TimelineItem>

          <TimelineItem
            title="Due dilligence"
            bullet={<IconHomeCheck size={20} />}
          >
            <Text className={classes.shadedtext} size="m">
              We will conduct due dilligence of the market, property, area, and
              buyers to help ensure you have all the information necessary to
              make any purchase decisions.
            </Text>
          </TimelineItem>

          <TimelineItem title="Site visits" bullet={<IconHomeMove size={20} />}>
            <Text className={classes.shadedtext} size="m">
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
            <Text className={classes.shadedtext} size="m">
              We conduct negotiations on your behalf, using our extensive
              property research and knowledge of the market to maximise your
              value.
            </Text>
          </TimelineItem>
          <TimelineItem
            title="Completion"
            bullet={<IconShoppingCart size={20} />}
          >
            <Text className={classes.shadedtext} size="m">
              We conduct full after-care upon completion of any sale, working
              with you and your team to finalise any purchase, and close off the
              deal efficiently.
            </Text>
          </TimelineItem>
        </Timeline>
      </div>
      <PropertyStatsGrid />
    </Container>
  );
}
