export type DashboardProps = {
    title: string;
    content: React.ReactNode;
};

export interface User {
    id: string;
    name: string;
    email: string;
}

export interface SidebarItem {
    label: string;
    path: string;
}

export type NavbarLink = {
    label: string;
    href: string;
};