<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { CircleCheck, CircleHelp, Circle } from "lucide-vue-next"

// Data for menu sections
const components = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description: "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description: "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description: "Displays an indicator showing the completion progress of a task.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description: "A set of layered sections of content displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description: "A popup that displays information related to an element when hovered.",
  },
]

</script>

<template>
  <NavigationMenu>
    <NavigationMenuList>
      <!-- Home Section -->
      <NavigationMenuItem>
        <NavigationMenuTrigger>Home</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul class="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
            <li class="row-span-3">
              <NavigationMenuLink asChild>
                <a href="/" class="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md">
                  <div class="mt-4 mb-2 text-lg font-medium">shadcn/ui</div>
                  <p class="text-muted-foreground text-sm leading-tight">
                    Beautifully designed components built with Tailwind CSS.
                  </p>
                </a>
              </NavigationMenuLink>
            </li>
            <li v-for="item in [
              { href:'/docs', title:'Introduction', description:'Re-usable components built using Radix UI and Tailwind CSS.' },
              { href:'/docs/installation', title:'Installation', description:'How to install dependencies and structure your app.' },
              { href:'/docs/primitives/typography', title:'Typography', description:'Styles for headings, paragraphs, lists...etc' },
            ]" :key="item.title">
              <NavigationMenuLink asChild>
                <a :href="item.href">
                  <div class="text-sm leading-none font-medium">{{ item.title }}</div>
                  <p class="text-muted-foreground line-clamp-2 text-sm leading-snug">
                    {{ item.description }}
                  </p>
                </a>
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <!-- Components Section -->
      <NavigationMenuItem>
        <NavigationMenuTrigger>Components</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul class="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
            <li v-for="c in components" :key="c.title">
              <NavigationMenuLink asChild>
                <a :href="c.href">
                  <div class="text-sm leading-none font-medium">{{ c.title }}</div>
                  <p class="text-muted-foreground line-clamp-2 text-sm leading-snug">
                    {{ c.description }}
                  </p>
                </a>
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <!-- Docs Link -->
      <NavigationMenuItem>
        <NavigationMenuLink asChild :class="navigationMenuTriggerStyle()">
          <a href="/docs">Docs</a>
        </NavigationMenuLink>
      </NavigationMenuItem>

      <!-- List Section -->
      <NavigationMenuItem>
        <NavigationMenuTrigger>List</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul class="grid w-[300px] gap-4">
            <li>
              <NavigationMenuLink asChild>
                <a href="#">
                  <div class="font-medium">Components</div>
                  <div class="text-muted-foreground">Browse all components in the library.</div>
                </a>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <a href="#">
                  <div class="font-medium">Documentation</div>
                  <div class="text-muted-foreground">Learn how to use the library.</div>
                </a>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <a href="#">
                  <div class="font-medium">Blog</div>
                  <div class="text-muted-foreground">Read our latest blog posts.</div>
                </a>
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <!-- Simple Section -->
      <NavigationMenuItem>
        <NavigationMenuTrigger>Simple</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul class="grid w-[200px] gap-4">
            <li>
              <NavigationMenuLink asChild><a href="#">Components</a></NavigationMenuLink>
              <NavigationMenuLink asChild><a href="#">Documentation</a></NavigationMenuLink>
              <NavigationMenuLink asChild><a href="#">Blocks</a></NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <!-- With Icon Section -->
      <NavigationMenuItem>
        <NavigationMenuTrigger>With Icon</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul class="grid w-[200px] gap-4">
            <li>
              <NavigationMenuLink asChild>
                <a href="#" class="flex-row items-center gap-2">
                  <CircleHelp /> Backlog
                </a>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <a href="#" class="flex-row items-center gap-2">
                  <Circle /> To Do
                </a>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <a href="#" class="flex-row items-center gap-2">
                  <CircleCheck /> Done
                </a>
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</template>
