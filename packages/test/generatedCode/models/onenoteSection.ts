import {Notebook, OnenoteEntityHierarchyModel, OnenotePage, SectionGroup, SectionLinks} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OnenoteSection extends OnenoteEntityHierarchyModel, Partial<Parsable> {
    /** Indicates whether this is the user's default section. Read-only. */
    isDefault?: boolean;
    /** The links property */
    links?: SectionLinks;
    /** The collection of pages in the section.  Read-only. Nullable. */
    pages?: OnenotePage[];
    /** The pages endpoint where you can get details for all the pages in the section. Read-only. */
    pagesUrl?: string;
    /** The parentNotebook property */
    parentNotebook?: Notebook;
    /** The parentSectionGroup property */
    parentSectionGroup?: SectionGroup;
}
