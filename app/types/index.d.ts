type RouteType = {
  title: string;
  href: `/${string}`;
}[];

type SidebarItemType = {
  title: string;
  href: string;
  disabled?: boolean;
  icon?: React.Element<React.SVGProps<SVGSVGElement>>;
  external?: boolean;
  items?: Omit<SidebarItemType, "items">[];
};

interface DashSidebarItemType extends SidebarItemType {
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}

// -- livekit types
enum PacketType {
  Transcript = 0,
  State,
  Error,
}

enum GPTState {
  Idle = 0,
  Loading,
  Speaking,
  Active,
}

interface Packet {
  type: PacketType;
  data: TranscriptPacket | StatePacket | ErrorPacket;
}

interface TranscriptPacket {
  sid: string;
  name: string;
  text: string;
  isFinal: boolean;
}

interface StatePacket {
  state: GPTState;
}

interface ErrorPacket {
  message: string;
}