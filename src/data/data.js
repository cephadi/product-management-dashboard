import { ReactComponent as OverviewIcon } from "../assets/icons/overview.svg";
import { ReactComponent as ShoppingBagIcon } from "../assets/icons/shopping-bag.svg";
import { ReactComponent as GraphIcon } from "../assets/icons/graph.svg";
import { ReactComponent as CalendarIcon } from "../assets/icons/calendar.svg";
import { ReactComponent as WalletIcon } from "../assets/icons/wallet.svg";
import { ReactComponent as FileIcon } from "../assets/icons/file.svg";
import { ReactComponent as ChatIcon } from "../assets/icons/chat.svg";
import { ReactComponent as GroupChatIcon } from "../assets/icons/group-chat.svg";
import { ReactComponent as SettingsIcon } from "../assets/icons/settings.svg";
import { ReactComponent as LogoutIcon } from "../assets/icons/logout.svg";
import { ReactComponent as LayersIcon } from "../assets/icons/layers.svg";
import { ReactComponent as DraftIcon } from "../assets/icons/draft.svg";
import { ReactComponent as InvisibleIcon } from "../assets/icons/invisible.svg";
import { ReactComponent as RejectedIcon } from "../assets/icons/rejected.svg";
import { ReactComponent as MailIcon } from "../assets/icons/mail.svg";
import { ReactComponent as FigmaIcon } from "../assets/icons/figma.svg";
import { ReactComponent as SketchIcon } from "../assets/icons/sketch.svg";
import { ReactComponent as AIIcon } from "../assets/icons/ai.svg";

import OrganicPage from '../assets/images/organic-landing-page.png'
import TrafficPage from '../assets/images/traffic-landing-page.png'
import PosDashboard from '../assets/images/pos-dashboard.png'
import GalleryPage from '../assets/images/gallery-page.png'
import WfhPage from '../assets/images/wfh-landing-page.png'

export const sidebar = [
    [
        { name: "Overview", icon: OverviewIcon },
        { name: "Products", icon: ShoppingBagIcon },
        { name: "Analytics", icon: GraphIcon },
        { name: "Schedule", icon: CalendarIcon },
        { name: "Payout", icon: WalletIcon },
        { name: "Statements", icon: FileIcon },
    ],
    [
        { name: "Help", icon: ChatIcon },
        { name: "Community", icon: GroupChatIcon },
        { name: "Settings", icon: SettingsIcon },
        { name: "Logout", icon: LogoutIcon },
    ],
]

export const status = [
    { name: "Published", icon: LayersIcon },
    { name: "Draft", icon: DraftIcon },
    { name: "Hidden", icon: InvisibleIcon },
    { name: "Rejected", icon: RejectedIcon },
    { name: "Under Review", icon: MailIcon },
]

export const products = [
    {
        name: "Organic Landing page",
        category: "Web Design",
        imageUrl: OrganicPage,
        price: 20,
        downloaded: 793,
        rating: 4.9,
        platformIcons: [FigmaIcon, SketchIcon],
        createdAt: "12/01/22",
    },
    {
        name: "Traffic Landing page",
        category: "Web Design",
        imageUrl: TrafficPage,
        price: 24,
        downloaded: 34,
        rating: 4.4,
        platformIcons: [FigmaIcon, AIIcon],
        createdAt: "10/01/22",
    },
    {
        name: "POS Dashboard",
        category: "Web Design",
        imageUrl: PosDashboard,
        price: 16,
        downloaded: 896,
        rating: 4.6,
        platformIcons: [FigmaIcon, SketchIcon],
        createdAt: "01/01/22",
    },
    {
        name: "Gallery page",
        category: "Web Design",
        imageUrl: GalleryPage,
        price: 38,
        downloaded: 194,
        rating: 4.6,
        platformIcons: [FigmaIcon, SketchIcon],
        createdAt: "04/01/22",
    },
    {
        name: "WFH Landing page",
        category: "Web Design",
        imageUrl: WfhPage,
        price: 22,
        downloaded: 404,
        rating: 4.3,
        platformIcons: [FigmaIcon, SketchIcon],
        createdAt: "12/12/21",
    },
];