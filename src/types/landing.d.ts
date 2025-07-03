export type SubService = {
    title: string
    href: string
    description: string
}

export type Service = {
    title: string
    href: string
    sub?: SubService[]
}
