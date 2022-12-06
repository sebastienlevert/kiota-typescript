import {Notebook, OnenoteEntityHierarchyModel, OnenotePage, SectionGroup, SectionLinks} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OnenoteSection extends OnenoteEntityHierarchyModel, Partial<Parsable> {
    /** Indicates whether this is the user's default section. Read-only. */
    isDefault?: boolean;
    /** Links for opening the section. The oneNoteClientURL link opens the section in the OneNote native client if it's installed. The oneNoteWebURL link opens the section in OneNote on the web. */
    links?: SectionLinks;
    /** The collection of pages in the section.  Read-only. Nullable. */
    pages?: OnenotePage[];
    /** The pages endpoint where you can get details for all the pages in the section. Read-only. */
    pagesUrl?: string;
    /** The notebook that contains the section.  Read-only. */
    parentNotebook?: Notebook;
    /** The section group that contains the section.  Read-only. */
    parentSectionGroup?: SectionGroup;
}
