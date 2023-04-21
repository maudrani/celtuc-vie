// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for Page documents */
interface PageDocumentData {
    /**
     * Display Title field in *Page*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: page.display_title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    display_title: prismicT.KeyTextField;
    /**
     * Slice Zone field in *Page*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: page.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<PageDocumentDataSlicesSlice>;
}
/**
 * Slice for *Page → Slice Zone*
 *
 */
type PageDocumentDataSlicesSlice = TitleText1Slice | InfoStatusImage1Slice | VideoDescriptionLauncherSlice;
/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;
export type AllDocumentTypes = PageDocument;
/**
 * Primary content in ImagesInfoData1 → Primary
 *
 */
interface InfoStats2SliceDefaultPrimary {
    /**
     * Top Title field in *ImagesInfoData1 → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: info_stats2.primary.top_title
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    top_title: prismicT.KeyTextField;
    /**
     * Title field in *ImagesInfoData1 → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: info_stats2.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.RichTextField;
    /**
     * Content field in *ImagesInfoData1 → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: info_stats2.primary.content
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    content: prismicT.RichTextField;
    /**
     * Image 1 field in *ImagesInfoData1 → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: info_stats2.primary.image_1
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image_1: prismicT.ImageField<"desktop" | "tablet" | "mobile">;
    /**
     * Image 2 field in *ImagesInfoData1 → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: info_stats2.primary.image_2
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image_2: prismicT.ImageField<"desktop" | "tablet" | "mobile">;
    /**
     * Image 1 field in *ImagesInfoData1 → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: info_stats2.primary.image_3
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image_3: prismicT.ImageField<"desktop" | "tablet" | "mobile">;
}
/**
 * Item in ImagesInfoData1 → Items
 *
 */
export interface InfoStats2SliceDefaultItem {
    /**
     * Feature Icon field in *ImagesInfoData1 → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: Icon name
     * - **API ID Path**: info_stats2.items[].feature_icon
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    feature_icon: prismicT.KeyTextField;
    /**
     * Feature Name field in *ImagesInfoData1 → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: info_stats2.items[].feature_name
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    feature_name: prismicT.KeyTextField;
}
/**
 * Default variation for ImagesInfoData1 Slice
 *
 * - **API ID**: `default`
 * - **Description**: `InfoStats2`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type InfoStats2SliceDefault = prismicT.SharedSliceVariation<"default", Simplify<InfoStats2SliceDefaultPrimary>, Simplify<InfoStats2SliceDefaultItem>>;
/**
 * Slice variation for *ImagesInfoData1*
 *
 */
type InfoStats2SliceVariation = InfoStats2SliceDefault;
/**
 * ImagesInfoData1 Shared Slice
 *
 * - **API ID**: `info_stats2`
 * - **Description**: `InfoStats2`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type InfoStats2Slice = prismicT.SharedSlice<"info_stats2", InfoStats2SliceVariation>;
/**
 * Primary content in ImagesInfoData2 → Primary
 *
 */
interface ImagesInfoData2SliceDefaultPrimary {
    /**
     * Title field in *ImagesInfoData2 → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: images_info_data2.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Content field in *ImagesInfoData2 → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: images_info_data2.primary.content
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    content: prismicT.RichTextField;
    /**
     * Link Name field in *ImagesInfoData2 → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: images_info_data2.primary.link_name
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    link_name: prismicT.KeyTextField;
    /**
     * Link Url field in *ImagesInfoData2 → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: images_info_data2.primary.link_url
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link_url: prismicT.LinkField;
    /**
     * Image 1 field in *ImagesInfoData2 → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: images_info_data2.primary.image_1
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image_1: prismicT.ImageField<"desktop" | "tablet" | "mobile">;
    /**
     * Image 2 field in *ImagesInfoData2 → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: images_info_data2.primary.image_2
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image_2: prismicT.ImageField<"desktop" | "tablet" | "mobile">;
    /**
     * Caption Title field in *ImagesInfoData2 → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: images_info_data2.primary.caption_title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    caption_title: prismicT.TitleField;
    /**
     * Caption Description field in *ImagesInfoData2 → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: images_info_data2.primary.caption_description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    caption_description: prismicT.TitleField;
    /**
     * Separator field in *ImagesInfoData2 → Primary*
     *
     * - **Field Type**: Boolean
     * - **Placeholder**: *None*
     * - **Default Value**: true
     * - **API ID Path**: images_info_data2.primary.separator
     * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
     *
     */
    separator: prismicT.BooleanField;
}
/**
 * Default variation for ImagesInfoData2 Slice
 *
 * - **API ID**: `default`
 * - **Description**: `ImagesInfoData2`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImagesInfoData2SliceDefault = prismicT.SharedSliceVariation<"default", Simplify<ImagesInfoData2SliceDefaultPrimary>, never>;
/**
 * Slice variation for *ImagesInfoData2*
 *
 */
type ImagesInfoData2SliceVariation = ImagesInfoData2SliceDefault;
/**
 * ImagesInfoData2 Shared Slice
 *
 * - **API ID**: `images_info_data2`
 * - **Description**: `ImagesInfoData2`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImagesInfoData2Slice = prismicT.SharedSlice<"images_info_data2", ImagesInfoData2SliceVariation>;
/**
 * Primary content in InfoStatsImage1 → Primary
 *
 */
interface InfoStatusImage1SliceDefaultPrimary {
    /**
     * Top title field in *InfoStatsImage1 → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: info_status_image1.primary.top_title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    top_title: prismicT.TitleField;
    /**
     * Title field in *InfoStatsImage1 → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: info_status_image1.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Content field in *InfoStatsImage1 → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: info_status_image1.primary.content
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    content: prismicT.RichTextField;
    /**
     * Link Name field in *InfoStatsImage1 → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: info_status_image1.primary.link_name
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    link_name: prismicT.KeyTextField;
    /**
     * Link Url field in *InfoStatsImage1 → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: info_status_image1.primary.link_url
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link_url: prismicT.LinkField;
    /**
     * Image field in *InfoStatsImage1 → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: info_status_image1.primary.image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<"tablet" | "mobile" | "desktop">;
}
/**
 * Item in InfoStatsImage1 → Items
 *
 */
export interface InfoStatusImage1SliceDefaultItem {
    /**
     * Stat Number field in *InfoStatsImage1 → Items*
     *
     * - **Field Type**: Number
     * - **Placeholder**: *None*
     * - **API ID Path**: info_status_image1.items[].stat_number
     * - **Documentation**: https://prismic.io/docs/core-concepts/number
     *
     */
    stat_number: prismicT.NumberField;
    /**
     * Stat Suffix field in *InfoStatsImage1 → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: info_status_image1.items[].stat_suffix
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    stat_suffix: prismicT.KeyTextField;
    /**
     * Stat Name field in *InfoStatsImage1 → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: info_status_image1.items[].stat_name
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    stat_name: prismicT.KeyTextField;
}
/**
 * Default variation for InfoStatsImage1 Slice
 *
 * - **API ID**: `default`
 * - **Description**: `InfoStatusImage1`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type InfoStatusImage1SliceDefault = prismicT.SharedSliceVariation<"default", Simplify<InfoStatusImage1SliceDefaultPrimary>, Simplify<InfoStatusImage1SliceDefaultItem>>;
/**
 * Slice variation for *InfoStatsImage1*
 *
 */
type InfoStatusImage1SliceVariation = InfoStatusImage1SliceDefault;
/**
 * InfoStatsImage1 Shared Slice
 *
 * - **API ID**: `info_status_image1`
 * - **Description**: `InfoStatusImage1`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type InfoStatusImage1Slice = prismicT.SharedSlice<"info_status_image1", InfoStatusImage1SliceVariation>;
/**
 * Primary content in TitleText1 → Primary
 *
 */
interface TitleText1SliceDefaultPrimary {
    /**
     * Title field in *TitleText1 → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: title_text1.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Content field in *TitleText1 → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: title_text1.primary.content
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    content: prismicT.RichTextField;
}
/**
 * Default variation for TitleText1 Slice
 *
 * - **API ID**: `default`
 * - **Description**: `TitleText1`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TitleText1SliceDefault = prismicT.SharedSliceVariation<"default", Simplify<TitleText1SliceDefaultPrimary>, never>;
/**
 * Slice variation for *TitleText1*
 *
 */
type TitleText1SliceVariation = TitleText1SliceDefault;
/**
 * TitleText1 Shared Slice
 *
 * - **API ID**: `title_text1`
 * - **Description**: `TitleText1`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TitleText1Slice = prismicT.SharedSlice<"title_text1", TitleText1SliceVariation>;
/**
 * Primary content in VideoDescriptionLauncher1 → Primary
 *
 */
interface VideoDescriptionLauncherSliceDefaultPrimary {
    /**
     * Title field in *VideoDescriptionLauncher1 → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: video_description_launcher.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Subtitle field in *VideoDescriptionLauncher1 → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: video_description_launcher.primary.subtitle
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    subtitle: prismicT.TitleField;
    /**
     * Video field in *VideoDescriptionLauncher1 → Primary*
     *
     * - **Field Type**: Embed
     * - **Placeholder**: *None*
     * - **API ID Path**: video_description_launcher.primary.video
     * - **Documentation**: https://prismic.io/docs/core-concepts/embed
     *
     */
    video: prismicT.EmbedField;
    /**
     * Caption Title field in *VideoDescriptionLauncher1 → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: video_description_launcher.primary.caption_title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    caption_title: prismicT.TitleField;
    /**
     * Caption Description field in *VideoDescriptionLauncher1 → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: video_description_launcher.primary.caption_description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    caption_description: prismicT.RichTextField;
}
/**
 * Default variation for VideoDescriptionLauncher1 Slice
 *
 * - **API ID**: `default`
 * - **Description**: `VideoDescriptionLauncher`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type VideoDescriptionLauncherSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<VideoDescriptionLauncherSliceDefaultPrimary>, never>;
/**
 * Slice variation for *VideoDescriptionLauncher1*
 *
 */
type VideoDescriptionLauncherSliceVariation = VideoDescriptionLauncherSliceDefault;
/**
 * VideoDescriptionLauncher1 Shared Slice
 *
 * - **API ID**: `video_description_launcher`
 * - **Description**: `VideoDescriptionLauncher`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type VideoDescriptionLauncherSlice = prismicT.SharedSlice<"video_description_launcher", VideoDescriptionLauncherSliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { PageDocumentData, PageDocumentDataSlicesSlice, PageDocument, AllDocumentTypes, InfoStats2SliceDefaultPrimary, InfoStats2SliceDefaultItem, InfoStats2SliceDefault, InfoStats2SliceVariation, InfoStats2Slice, ImagesInfoData2SliceDefaultPrimary, ImagesInfoData2SliceDefault, ImagesInfoData2SliceVariation, ImagesInfoData2Slice, InfoStatusImage1SliceDefaultPrimary, InfoStatusImage1SliceDefaultItem, InfoStatusImage1SliceDefault, InfoStatusImage1SliceVariation, InfoStatusImage1Slice, TitleText1SliceDefaultPrimary, TitleText1SliceDefault, TitleText1SliceVariation, TitleText1Slice, VideoDescriptionLauncherSliceDefaultPrimary, VideoDescriptionLauncherSliceDefault, VideoDescriptionLauncherSliceVariation, VideoDescriptionLauncherSlice };
    }
}
