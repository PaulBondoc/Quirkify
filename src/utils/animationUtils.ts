export const addAnimation = (scrollers: NodeListOf<HTMLElement>) => {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", "true");
    const scrollerInner =
      scroller.querySelector<HTMLElement>(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner?.children || []);
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true) as HTMLElement;
      duplicatedItem.setAttribute("aria-hidden", "true");
      scrollerInner?.appendChild(duplicatedItem);
    });
  });
};
