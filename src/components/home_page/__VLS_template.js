import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name } from './FlashDeals.vue';

function __VLS_template() {
  let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
  /* Components */
  let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
  let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & typeof __VLS_publicComponent & (new () => { $slots: typeof __VLS_slots; })>;
  let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
  let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
  /* Style Scoped */
  type __VLS_StyleScopedClasses = {};
  let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
  /* CSS variable injection */
  /* CSS variable injection end */
  let __VLS_resolvedLocalAndGlobalComponents!: {} &
    __VLS_WithComponent<'VContainer', typeof __VLS_localComponents, "VContainer", "vContainer", "v-container"> &
    __VLS_WithComponent<'VRow', typeof __VLS_localComponents, "VRow", "vRow", "v-row"> &
    __VLS_WithComponent<'VCol', typeof __VLS_localComponents, "VCol", "vCol", "v-col"> &
    __VLS_WithComponent<'VCard', typeof __VLS_localComponents, "VCard", "vCard", "v-card"> &
    __VLS_WithComponent<'VCardText', typeof __VLS_localComponents, "VCardText", "vCardText", "v-card-text"> &
    __VLS_WithComponent<'VRating', typeof __VLS_localComponents, "VRating", "vRating", "v-rating">;
  ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div;
  __VLS_components.VContainer; __VLS_components.VContainer; __VLS_components.vContainer; __VLS_components.vContainer; __VLS_components["v-container"]; __VLS_components["v-container"];
  // @ts-ignore
  [VContainer, VContainer,];
  __VLS_components.VRow; __VLS_components.VRow; __VLS_components.vRow; __VLS_components.vRow; __VLS_components["v-row"]; __VLS_components["v-row"];
  // @ts-ignore
  [VRow, VRow,];
  __VLS_components.VCol; __VLS_components.VCol; __VLS_components.vCol; __VLS_components.vCol; __VLS_components["v-col"]; __VLS_components["v-col"];
  // @ts-ignore
  [VCol, VCol,];
  __VLS_components.VCard; __VLS_components.VCard; __VLS_components.vCard; __VLS_components.vCard; __VLS_components["v-card"]; __VLS_components["v-card"];
  // @ts-ignore
  [VCard, VCard,];
  ({} as __VLS_IntrinsicElements).img;
  __VLS_components.VCardText; __VLS_components.VCardText; __VLS_components.VCardText; __VLS_components.VCardText; __VLS_components.vCardText; __VLS_components.vCardText; __VLS_components.vCardText; __VLS_components.vCardText; __VLS_components["v-card-text"]; __VLS_components["v-card-text"]; __VLS_components["v-card-text"]; __VLS_components["v-card-text"];
  // @ts-ignore
  [VCardText, VCardText, VCardText, VCardText,];
  __VLS_components.VRating; __VLS_components.VRating; __VLS_components.vRating; __VLS_components.vRating; __VLS_components["v-rating"]; __VLS_components["v-rating"];
  // @ts-ignore
  [VRating, VRating,];
  ({} as __VLS_IntrinsicElements).del; ({} as __VLS_IntrinsicElements).del;
  {
    const __VLS_0 = ({} as __VLS_IntrinsicElements)["div"];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, {});
    ({} as __VLS_IntrinsicElements).div;
    ({} as __VLS_IntrinsicElements).div;
    const __VLS_2 = __VLS_1({ ...{}, class: ("flash-deal"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
    {
      let __VLS_4!: 'VContainer' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.VContainer : 'vContainer' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.vContainer : 'v-container' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['v-container'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['VContainer'];
      const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({ ...{}, fluid: (true), }));
      ({} as { VContainer: typeof __VLS_4; }).VContainer;
      ({} as { VContainer: typeof __VLS_4; }).VContainer;
      const __VLS_6 = __VLS_5({ ...{}, fluid: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_5));
      const __VLS_7 = __VLS_pickFunctionalComponentCtx(__VLS_4, __VLS_6)!;
      {
        let __VLS_8!: 'VRow' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.VRow : 'vRow' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.vRow : 'v-row' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['v-row'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['VRow'];
        const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({ ...{}, }));
        ({} as { VRow: typeof __VLS_8; }).VRow;
        ({} as { VRow: typeof __VLS_8; }).VRow;
        const __VLS_10 = __VLS_9({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_9));
        const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10)!;
        for (const [item] of __VLS_getVForSourceType((__VLS_ctx.products)!)) {
          {
            let __VLS_12!: 'VCol' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.VCol : 'vCol' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.vCol : 'v-col' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['v-col'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['VCol'];
            const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ ...{}, cols: ("3"), key: ((item.id)), }));
            ({} as { VCol: typeof __VLS_12; }).VCol;
            ({} as { VCol: typeof __VLS_12; }).VCol;
            const __VLS_14 = __VLS_13({ ...{}, cols: ("3"), key: ((item.id)), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
            const __VLS_15 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14)!;
            {
              let __VLS_16!: 'VCard' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.VCard : 'vCard' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.vCard : 'v-card' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['v-card'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['VCard'];
              const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({ ...{}, elevation: ("0"), }));
              ({} as { VCard: typeof __VLS_16; }).VCard;
              ({} as { VCard: typeof __VLS_16; }).VCard;
              const __VLS_18 = __VLS_17({ ...{}, elevation: ("0"), }, ...__VLS_functionalComponentArgsRest(__VLS_17));
              const __VLS_19 = __VLS_pickFunctionalComponentCtx(__VLS_16, __VLS_18)!;
              {
                const __VLS_20 = ({} as __VLS_IntrinsicElements)["img"];
                const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, {});
                ({} as __VLS_IntrinsicElements).img;
                const __VLS_22 = __VLS_21({ ...{}, src: ((item.thumbnail)), class: ("w-100"), style: ({}), alt: (""), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
                const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
              }
              {
                let __VLS_24!: 'VCardText' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.VCardText : 'vCardText' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.vCardText : 'v-card-text' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['v-card-text'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['VCardText'];
                const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ ...{}, class: ("pl-0"), }));
                ({} as { VCardText: typeof __VLS_24; }).VCardText;
                ({} as { VCardText: typeof __VLS_24; }).VCardText;
                const __VLS_26 = __VLS_25({ ...{}, class: ("pl-0"), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
                const __VLS_27 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26)!;
                (
                  item.description.split(" ").length <= 10
                    ? item.description
                    : item.description.split(" ").slice(0, 9).join(" ") +
                    " ......."
                );
              }
              {
                let __VLS_28!: 'VRating' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.VRating : 'vRating' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.vRating : 'v-rating' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['v-rating'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['VRating'];
                const __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({ ...{}, modelValue: ((item.rating)), halfIncrements: (true), readonly: (true), color: ("yellow-darken-3"), size: ("x-small"), density: ("cobact"), }));
                ({} as { VRating: typeof __VLS_28; }).VRating;
                ({} as { VRating: typeof __VLS_28; }).VRating;
                const __VLS_30 = __VLS_29({ ...{}, modelValue: ((item.rating)), halfIncrements: (true), readonly: (true), color: ("yellow-darken-3"), size: ("x-small"), density: ("cobact"), }, ...__VLS_functionalComponentArgsRest(__VLS_29));
                const __VLS_31 = __VLS_pickFunctionalComponentCtx(__VLS_28, __VLS_30)!;
              }
              {
                let __VLS_32!: 'VCardText' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.VCardText : 'vCardText' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.vCardText : 'v-card-text' extends keyof typeof __VLS_ctx ? (typeof __VLS_ctx)['v-card-text'] : (typeof __VLS_resolvedLocalAndGlobalComponents)['VCardText'];
                const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({ ...{}, }));
                ({} as { VCardText: typeof __VLS_32; }).VCardText;
                ({} as { VCardText: typeof __VLS_32; }).VCardText;
                const __VLS_34 = __VLS_33({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_33));
                const __VLS_35 = __VLS_pickFunctionalComponentCtx(__VLS_32, __VLS_34)!;
                {
                  const __VLS_36 = ({} as __VLS_IntrinsicElements)["del"];
                  const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, {});
                  ({} as __VLS_IntrinsicElements).del;
                  ({} as __VLS_IntrinsicElements).del;
                  const __VLS_38 = __VLS_37({ ...{}, }, ...__VLS_functionalComponentArgsRest(__VLS_37));
                  const __VLS_39 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38)!;
                  (item.price);
                }
                (
                  Math.ceil(
                    item.price - item.price * (item.discountPercentage / 100)
                  )
                );
              }
            }
          }
          // @ts-ignore
          [products,];
        }
      }
    }
  }
  if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
  }
  var __VLS_slots!: {};
  return __VLS_slots;
}
