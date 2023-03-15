<script lang="ts">
  import { NavMenuBar, NavMenuItem } from "$lib/components/navmenubar";
  import GlobalHeader from "$lib/components/globalheader";
  import Badge from "$lib/components/badge";
  import Button from "$lib/components/button";
  import Group from "$lib/components/group";
  import Icon from "$lib/components/icon";
  import { useComboBoxState, Combobox } from "$lib/components/combobox";
  import { Drawer, DrawerDisclosure, useDrawerState } from "$lib/components/drawer";
  import { Popover, PopoverDisclosure, usePopoverState } from "$lib/components/popover";
  import { List, ListItem } from "$lib/components/list";
  import Separator from "$lib/components/separator";
  import LazyImage from "$lib/components/lazyImage";
  import type { PageData } from './$types'
  import { enhance } from "$app/forms";
  export let data: PageData;
  const transparentPixel = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAABICAQAAAAARl4uAAAAOUlEQVR42u3NMQ0AAAwDoNW/6Zlo0gcMkBuJWCwWi8VisVgsFovFYrFYLBaLxWKxWCwWi8VisbjpAfxoAEn3HhGlAAAAAElFTkSuQmCC";

  interface CategoryItem {
    name: string;
    href: string;
    img: string;
    subnav: Array<CategoryItem>
  }

  interface HistoryItem {
    drawerBackText: string;
    title: string;
    menu: Array<object> | null;
  } 

  interface History extends Array<HistoryItem>{}

  function handleDrawerItemClick(item: CategoryItem) {
    history.push({
      drawerBackText: title,
      title: item.name,
      menu: item.subnav
    });

    drawerBackText = title;
    title = item.name;
    menu = item.subnav;
  }

  function handleOpenMenu(item: CategoryItem) {
    if (item.subnav.length) {
      history = history.splice(0,1);
      history.push({
        drawerBackText: "All Categories",
        title: item.name,
        menu: item.subnav
      });

      drawerBackText = "All Categories";
      title = item.name;
      menu = item.subnav;
      
      $drawerState.open = true;
      $drawerState.showBack = true;
    }
  }

  function handleShowCategories() {
    drawerBackText = "Main Menu";
    $drawerState.showBack = true;
  }

  function backToPrevMenu() {
    if (history.length === 1) {
      $drawerState.showBack = false;
      return;
    }

    history.pop();
    const _data = history[history.length - 1];
    drawerBackText = _data.drawerBackText;
    title = _data.title;
    menu = _data.menu !== null ? _data.menu : data.categories
  }
  
  let drawerBackText = "Main Menu";
  let title = "All Categories";
  $: menu = data.categories;

  let history: History = [{
    drawerBackText,
    title,
    menu: null,
  }];
  const searchState = useComboBoxState();
  const drawerState = useDrawerState();
  const popoverState = usePopoverState();
</script>
<Drawer state={drawerState}>
  <Button slot="back" variant="underline" label="Back to {drawerBackText}" on:click={backToPrevMenu}>
    <Icon>
      <title>arrow-left</title>
      <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" />
    </Icon>
    Back to {drawerBackText}
  </Button>
  {#if $drawerState.showBack}
  <h2 class="drawer__title">{title}</h2>
  <List>
    {#each menu as item}
      <ListItem>
        {#if item.subnav.length}
        <button 
          type="button" 
          class="drawer__item"
          class:drawer__item--no-image={item.img == transparentPixel}
          on:click={handleDrawerItemClick.bind(null, item)}
        >
          {#if item.img !== transparentPixel}
            <LazyImage height="72" width="58" src={item.img} alt={item.name} />
          {/if}
          {item.name}
          {#if item.subnav.length}
            <Icon>
              <title>chevron-right</title>
              <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
            </Icon>
          {/if}
        </button>
        {:else} 
          <div 
            class="drawer__item"
            class:drawer__item--no-image={item.img == transparentPixel}
          >
            {#if item.img !== transparentPixel}
              <LazyImage height="72" width="58" src={item.img} alt={item.name} />
            {/if}
            {item.name}
            {#if item.subnav.length}
              <Icon>
                <title>chevron-right</title>
                <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
              </Icon>
            {/if}
          </div>
        {/if}
      </ListItem>
    {/each}
  </List>
  {:else}
  <List>
    <ListItem variant="iconWithText" on:click={handleShowCategories}>
      <Icon>
        <title>dots-grid</title>
        <path d="M12 16C13.1 16 14 16.9 14 18S13.1 20 12 20 10 19.1 10 18 10.9 16 12 16M12 10C13.1 10 14 10.9 14 12S13.1 14 12 14 10 13.1 10 12 10.9 10 12 10M12 4C13.1 4 14 4.9 14 6S13.1 8 12 8 10 7.1 10 6 10.9 4 12 4M6 16C7.1 16 8 16.9 8 18S7.1 20 6 20 4 19.1 4 18 4.9 16 6 16M6 10C7.1 10 8 10.9 8 12S7.1 14 6 14 4 13.1 4 12 4.9 10 6 10M6 4C7.1 4 8 4.9 8 6S7.1 8 6 8 4 7.1 4 6 4.9 4 6 4M18 16C19.1 16 20 16.9 20 18S19.1 20 18 20 16 19.1 16 18 16.9 16 18 16M18 10C19.1 10 20 10.9 20 12S19.1 14 18 14 16 13.1 16 12 16.9 10 18 10M18 4C19.1 4 20 4.9 20 6S19.1 8 18 8 16 7.1 16 6 16.9 4 18 4Z" />
      </Icon>
      Categories
    </ListItem>
  </List>
  <Separator />
  <List>
    <ListItem variant="iconWithText">
      <Icon>
        <title>account-circle-outline</title>
        <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7.07,18.28C7.5,17.38 10.12,16.5 12,16.5C13.88,16.5 16.5,17.38 16.93,18.28C15.57,19.36 13.86,20 12,20C10.14,20 8.43,19.36 7.07,18.28M18.36,16.83C16.93,15.09 13.46,14.5 12,14.5C10.54,14.5 7.07,15.09 5.64,16.83C4.62,15.5 4,13.82 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,13.82 19.38,15.5 18.36,16.83M12,6C10.06,6 8.5,7.56 8.5,9.5C8.5,11.44 10.06,13 12,13C13.94,13 15.5,11.44 15.5,9.5C15.5,7.56 13.94,6 12,6M12,11A1.5,1.5 0 0,1 10.5,9.5A1.5,1.5 0 0,1 12,8A1.5,1.5 0 0,1 13.5,9.5A1.5,1.5 0 0,1 12,11Z" />
      </Icon>
      My Account
    </ListItem>
    <ListItem variant="iconWithText">
      <Icon>
        <title>package-variant-closed</title>
        <path d="M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L10.11,5.22L16,8.61L17.96,7.5L12,4.15M6.04,7.5L12,10.85L13.96,9.75L8.08,6.35L6.04,7.5M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V9.21L13,12.58V19.29L19,15.91Z" />
      </Icon>
      Order Status
    </ListItem>
  </List>
  <Separator />
  <List>
    <ListItem variant="iconWithText">
      <Icon>
        <title>comment-question</title>
        <path d="M4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2M12.19,5.5C11.3,5.5 10.59,5.68 10.05,6.04C9.5,6.4 9.22,7 9.27,7.69H11.24C11.24,7.41 11.34,7.2 11.5,7.06C11.7,6.92 11.92,6.85 12.19,6.85C12.5,6.85 12.77,6.93 12.95,7.11C13.13,7.28 13.22,7.5 13.22,7.8C13.22,8.08 13.14,8.33 13,8.54C12.83,8.76 12.62,8.94 12.36,9.08C11.84,9.4 11.5,9.68 11.29,9.92C11.1,10.16 11,10.5 11,11H13C13,10.72 13.05,10.5 13.14,10.32C13.23,10.15 13.4,10 13.66,9.85C14.12,9.64 14.5,9.36 14.79,9C15.08,8.63 15.23,8.24 15.23,7.8C15.23,7.1 14.96,6.54 14.42,6.12C13.88,5.71 13.13,5.5 12.19,5.5M11,12V14H13V12H11Z" />
      </Icon>
      Live Chat
    </ListItem> 
    <ListItem variant="iconWithText">
      <Icon>
        <title>post-outline</title>
        <path d="M19 5V19H5V5H19M21 3H3V21H21V3M17 17H7V16H17V17M17 15H7V14H17V15M17 12H7V7H17V12Z" />
      </Icon>
      The Inspo Spot
    </ListItem>
    <ListItem variant="iconWithText">
      <Icon>
        <title>store-marker-outline</title>
        <path d="M20 6H4V4H20V6M14.3 12C13.5 12.96 13 14.18 13 15.5C13 16.64 13.43 17.86 14 19V20H4V14H3V12L4 7H20L20.7 10.5C20.04 10.18 19.32 10 18.56 10L18.36 9H5.64L5.04 12H14.3M12 14H6V18H12V14M22 15.5C22 18.1 18.5 22 18.5 22S15 18.1 15 15.5C15 13.6 16.6 12 18.5 12S22 13.6 22 15.5M19.7 15.6C19.7 15 19.1 14.4 18.5 14.4S17.3 14.9 17.3 15.6C17.3 16.2 17.8 16.8 18.5 16.8S19.8 16.2 19.7 15.6Z" />
      </Icon>
      Find Stores
    </ListItem>
    <ListItem variant="iconWithText">
      <Icon>
        <title>help-circle-outline</title>
        <path d="M11,18H13V16H11V18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6Z" />
      </Icon>
      Help
    </ListItem>
  </List>
  {/if}
</Drawer>
<Popover state={popoverState}>
  {#if !data.user}
    <a href="/login" class="link link--button">
      Sign in or Create Account
    </a>
    <Separator gap={8}/>
  {/if}
  <List>
    {#if data.user}
      <ListItem>
        <a href="/account" class="list__item-link">
        <Icon>
          <title>account-circle-outline</title>
          <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7.07,18.28C7.5,17.38 10.12,16.5 12,16.5C13.88,16.5 16.5,17.38 16.93,18.28C15.57,19.36 13.86,20 12,20C10.14,20 8.43,19.36 7.07,18.28M18.36,16.83C16.93,15.09 13.46,14.5 12,14.5C10.54,14.5 7.07,15.09 5.64,16.83C4.62,15.5 4,13.82 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,13.82 19.38,15.5 18.36,16.83M12,6C10.06,6 8.5,7.56 8.5,9.5C8.5,11.44 10.06,13 12,13C13.94,13 15.5,11.44 15.5,9.5C15.5,7.56 13.94,6 12,6M12,11A1.5,1.5 0 0,1 10.5,9.5A1.5,1.5 0 0,1 12,8A1.5,1.5 0 0,1 13.5,9.5A1.5,1.5 0 0,1 12,11Z" />
        </Icon>
        My Account
        </a>
      </ListItem>
    {/if}
    <ListItem variant="iconWithText">
      <Icon>
        <title>package-variant-closed</title>
        <path d="M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L10.11,5.22L16,8.61L17.96,7.5L12,4.15M6.04,7.5L12,10.85L13.96,9.75L8.08,6.35L6.04,7.5M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V9.21L13,12.58V19.29L19,15.91Z" />
      </Icon>
      Order Status
    </ListItem>
  </List>
  {#if data.user}
    <Separator gap={8} />
    <form use:enhance method="post" action="/logout">
      <Button fullwidth rounded variant="primary" type="submit">Sign out</Button>
    </form>
  {/if}
</Popover>
<GlobalHeader>
  <DrawerDisclosure state={drawerState} style="grid-area:menu;max-width:36px" label="Main Menu">
    <Icon>
      <path d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"/>
    </Icon>
  </DrawerDisclosure>
  <a href="/" title="Spener's Gift" class="link" style="grid-area:logo">
    <Icon variant="logo" viewbox="0 0 72 32">
      <path d="M66 15.9c-.5-.7-2.4-2.8-.5-5.3.6-.8 1.4-1.5 1.8-.9.6 1-.4 4.7-.4 4.7l2 .7 2.2-6.2-2-.5-.2.5S68 7 66.6 7.5c-2.2.7-3.7 2.6-4 4.8-.1.5-.1.9-.1 1.4-.9-1.3-1.8-2.7-2.1-3.8-.4-1.7-.7-3.4-.7-5.1L57 5s-.4 1.6-.1 2.6.6 2.8.6 2.8h-1v1.5c-2.2-1.1-7.5-3.8-8.7-5.3 0 0-1.5.7-1.5 2 0 .8 1 1 1 1l.5 3.7s-.8 1.3-.8 1.8.2 1.2 1.1 1.2c0 0 .2 1.6.4 3.3l-1.4 1c.6.9 1.1 2.7-.7 4.4s-3.4.7-4.3-.8c-.9-1.5 1.5-9.7 1.5-9.7l.8 3.5 2.2-1.4s-.7-1.9-1-3c-.3-1.2-.3-5.1-.3-5.1L43 8s-.3 1.9-.7 3.3c-.3 1.1-1.4 4.1-2.1 6.4.3-5.9.7-13.5.9-15-.8-.1-2.6 1.2-3.7 1.7l.2 13.6c-1.5-4-2.9-7.6-4-10.7-1.1.1-1.8.4-2.3.8v4.1c-2.4-1.7-6.8-4.9-7.7-6.5 0 0-1.7.6-1.8 2-.1.8.9 1.2.9 1.2v4.2s-.4.5-.7 1c-.4-.4-.9-.7-1.4-1.1-1.8-1.4-3.1-2.4-3.8-3.3-1.2-1.5-2-3.3-2.4-5.4l-.4-.1c-.3.8-.6 1.3-1 1.8l.6-4.6-3.4-.3-.2 1S7.9-1 5.7.3C4.3 1.2.5 4 .6 10.2s4.9 9 6.5 9.6c1.6.6 6.6 1.7 7.1 3.4.6 1.6-1.5 5.2-3.7 4.8-.3-.1-2.1-.2-2.2-3.7l-2.6 2.1s.8 4.5 2.4 4.8c2 .4 6.1.7 9-6.3.3 2.1.6 4.6.8 5.7l.3.5c1.1-.5 2.7-1.8 2.7-1.8l-1-5.8-.3-1.8 2.4-2c.2-.1.4-.3.6-.5-.1 2.5-.1 6.1-.1 6.4 0 .5-.2 2.1 2.3 1.6 2.3-.4 2.5-1.6 5.6-2.2l.4-.6c-.2 1.9-.5 4.3-.5 4.6l.1.2c1.2 0 2.9-1.1 2.9-1.1S34 17 34 16.2c1.5 3.6 3 7.4 3.8 9.7.6-.1 1.4-.6 1.9-.9.4 1.2 1.3 2.2 2.9 2.6 3.4.9 5.5-1.1 6.5-2.7.2.5.6 1.2 2.2.6 2.1-.6 1.9-.6 3.9-1.3-.2 1.8-.5 3.2-.7 4.1l3-1.3s0-3 .2-4.1c.2-1.1.6-3 .6-3s5.5 7.6 6.5 11.1l3 .8S61.5 20.6 60.1 19c0 0 3 .2 3.9-1.5.1-.1.1-.3.1-.4.4.5.9.8 1.1.9.9.5 3.7 1.7 3.9 2.6.2 1-1.3 2.5-2.6 2.1-.2-.1-1.4-.2-1.1-2.1l-1.8.8s0 2.5.9 2.9c1.8.8 3.7 1.3 6.2-2.3 2.1-2.5-3.3-4.2-4.7-6.1zm-58.5-.5c-1.1-1.1-4.7-4.2-2.4-9.1.7-1.6 1.8-3.2 2.6-2.1 1.3 1.7.7 8.3.7 8.3l3.6.5.6-4.2.2.7c.4 1 .7 1.7 1 2.1.3 1.2.7 2.9 1.4 5.2.4 1.4.7 2.6 1 3.6-2.2-2-6.8-3.1-8.7-5zM19.2 20c0-.1-.3-1-.9-2.7-.5-1.7-.8-2.5-.8-2.6v-.1c2.2 1 3.6 2.1 4.5 3.2-1.4 1.3-2.3 2-2.8 2.2zm12.2-5.1c0 2-.1 3.6-.1 4.9 0 .2-.1 1-.2 2.3 0 .1 0 .3-.1.6-.8 0-2.1.2-3.8 1.1-2.8 1.5-2.6 0-2.6-.6s.2-5.5.2-5.5 3.3.9 4.4.7c0 0 1.4-.9 1.7-1.3 0 0-1.4-.6-3.2-1.2-1-.4-2-.8-2.9-1.3L25 11s4.3 3.4 6.3 3.7l.1-.1v.3zm24.3 6.8c-.6 0-1.4.3-2.4 1-2.5 1.7-2.4-.1-2.5-.6-.1-.6-.5-5-.5-5s2.6.8 3.6.5c0 0 1.2-1.3 1.4-1.7 0 0-2.2-.7-2.5-.7-1.7-.4-2.9-.8-2.9-.8l-.3-3.2s4.5 2.6 6.3 2.6l.4-.3c0 2.1-.3 5.3-.6 8.2zm6-4.5c-.4 1-2.8.3-2.8.3l.6-3.9s2.5 2.6 2.2 3.6z"/>
    </Icon>
  </a>
  <div class="flex-center" style="grid-area:search">
    <Combobox placeholder="Search" rounded state={searchState} style="max-width:640px"/>
  </div>
  <Group align="end">
    <PopoverDisclosure state={popoverState}>
      <Icon>
        <path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2M7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.5.88 4.93 1.78A7.893 7.893 0 0 1 12 20c-1.86 0-3.57-.64-4.93-1.72m11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33A7.928 7.928 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.5-1.64 4.83M12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6m0 5a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 12 8a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 12 11Z"/>
      </Icon>
      <div class="desktop-only">
        <div class="subtext">{data.user ? `Hi, ${data.user.name.split(" ")[0]}` : "Sign in"}</div>
        <div class="text">Account</div>
      </div>
    </PopoverDisclosure>
    <Button variant="icon">
      <Icon>
        <path d="M17 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0-2-2M1 2v2h2l3.6 7.59-1.36 2.45c-.15.28-.24.61-.24.96a2 2 0 0 0 2 2h12v-2H7.42a.25.25 0 0 1-.25-.25c0-.05.01-.09.03-.12L8.1 13h7.45c.75 0 1.41-.42 1.75-1.03l3.58-6.47c.07-.16.12-.33.12-.5a1 1 0 0 0-1-1H5.21l-.94-2M7 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0-2-2Z"/>
      </Icon>
      <Badge>0</Badge>
    </Button>
  </Group>
</GlobalHeader>
<div class="desktop-navmenu">
  <NavMenuBar>
    {#each data.categories as item}
      <NavMenuItem on:click={handleOpenMenu.bind(null, item)}>{item.name}</NavMenuItem>
    {/each}
  </NavMenuBar>
</div>
<main class="page-container">
  <slot/>
</main>
<style>
  .list__item-link,
  .list__item-link:visited {
    display: grid;
    gap: 8px;
    grid-template-columns: 24px 1fr;
    text-decoration: none;
    color: #212121;
  }

  .desktop-navmenu {
    position: relative;
    border-bottom: 1px solid #d1d1d6;
    padding: 4px;
  }

  .drawer__title {
		margin: 8px;
		line-height: 1.2;
		font-size: 20px;
		font-weight: 500;;
	}
	
	.drawer__item {
		width: 100%;
		background-color: transparent;
		border: none;
		display: grid;
		grid-template-columns: 60px 1fr 24px;
		gap: 8px;
		text-align: left;
		align-items: center;
		height: 72px;
		padding: 0;
		margin: 0;
		cursor: pointer;
	}

  .drawer__item--no-image {
    grid-template-columns: 1fr 24px;
    height: 40px;
    padding: 0 8px;
  }

  .link {
    display: inline-flex;
    justify-content: center; 
  }

  .link--button {
    -webkit-tap-highlight-color: transparent;
    font-size: 0.875rem;
    font-weight: 500;
    letter-spacing: 0.04em;
    line-height: 1.875rem;
    text-decoration: none;
    text-transform: initial;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    min-width: 64px;
    height: 36px;
    border: none;
    outline: 0;
    overflow: hidden;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-appearance: none;
    appearance: none;
    gap: 4px;
    transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    background-color: #2a508f;
    color: #fff;
    box-shadow: inset 0 0 0 2px #1D3864;
    border-radius: 18px;
    padding: 0 16px;
  }

  .subtext,
  .text {
    text-align: left;
    line-height: 1.1;
  }
  
  .subtext {
    font-size: 12px;
  }

  .text {
    font-weight: 500;
    font-size: 16px;
  }

  .flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .desktop-only {
    display: block;
  }

  @media (max-width: 560px) {
    .desktop-only,
    .desktop-navmenu {
      display: none;
    }
  }
</style>