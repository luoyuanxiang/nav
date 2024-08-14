export type NavData = {
    title: string
    desc: string
    items: NavLink[]
}
export type NavLink = {
    icon: string
    title: string
    desc?: string
    link: string
}
