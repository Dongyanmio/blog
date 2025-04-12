<script setup lang="ts">
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    type SidebarProps,
} from './ui/sidebar'
import {
    House,
    Newspaper,
    Users,
    Info
} from 'lucide-vue-next'
const props = withDefaults(defineProps<SidebarProps>(), {
    variant: 'inset',
})
const data = {
    website: [
        {
            title: '首页',
            url: '/',
            icon: House,
        },
        {
            title: '文章',
            url: '/posts/',
            icon: Newspaper,
        }
        ,
        {
            title: '友情链接',
            url: '/pages/friends/',
            icon: Users,
        }
    ],
    beian: [
        {
            title: '萌 ICP 备 20240453 号',
            url: 'https://icp.gov.moe/?keyword=20240453',
            icon: Info,
        },
        {
            title: '团 ICP 备 20250333 号',
            url: 'https://icp.xn--kiv.fun/id.php?keyword=20253333',
            icon: Info,
        },
    ],
}
</script>
<template>
    <Sidebar v-bind="props">
        <SidebarHeader>
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton size="lg" as-child>
                        <a href="#">
                            <div
                                class="flex aspect-square size-8 items-center justify-center rounded-lg">
                                <img src="https://q.qlogo.cn/g?b=qq&nk=3010013479&s=160" alt="冬烟mio" class="rounded-full">
                            </div>
                            <div class="grid flex-1 text-left text-sm leading-tight">
                                <span class="truncate font-semibold">冬烟 の 小窝</span>
                                <span class="truncate text-xs">柳庭风静人眠昼，昼眠人静风庭柳。</span>
                            </div>
                        </a>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
            <AppSidebarMain title="在此网站上" :items="data.website" />
            <AppSidebarMain title="备案" :items="data.beian" />
        </SidebarContent>
        <SidebarFooter>
            <ClientOnly>
                <AppModeSwitch class="w-full" />
                <div>
                    <a href="https://vercel.com/">
                        <img src="https://img.shields.io/badge/Vercel-%E6%8F%90%E4%BE%9B%20%E9%9D%99%E6%80%81%E6%89%98%E7%AE%A1%20%E6%9C%8D%E5%8A%A1-black?logo=vercel"
                            alt="本网站由 Vercel 提供 静态托管 服务">
                    </a>
                </div>
                <div>
                    <a href="https://www.upyun.com/?utm_source=lianmeng&utm_medium=referral">
                        <img src="https://img.shields.io/badge/%E5%8F%88%E6%8B%8D%E4%BA%91-%E6%8F%90%E4%BE%9B%20CDN%20%E5%8A%A0%E9%80%9F/%E4%BA%91%E5%AD%98%E5%82%A8%E6%9C%8D%E5%8A%A1-00a0ff"
                            alt="本网站由 又拍云 提供 CDN 加速/云存储服务">
                    </a>
                </div>
            </ClientOnly>
            <div class="text-sm text-muted-foreground">
                版权所有 © 2023 - 2025 冬烟mio
            </div>
        </SidebarFooter>
    </Sidebar>
</template>