import {Notebook, OnenoteEntityHierarchyModel, OnenoteSection} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SectionGroup extends OnenoteEntityHierarchyModel, Partial<Parsable> {
    /** The parentNotebook property */
    parentNotebook?: Notebook;
    /** The parentSectionGroup property */
    parentSectionGroup?: SectionGroup;
    /** The section groups in the section. Read-only. Nullable. */
    sectionGroups?: SectionGroup[];
    /** The URL for the sectionGroups navigation property, which returns all the section groups in the section group. Read-only. */
    sectionGroupsUrl?: string;
    /** The sections in the section group. Read-only. Nullable. */
    sections?: OnenoteSection[];
    /** The URL for the sections navigation property, which returns all the sections in the section group. Read-only. */
    sectionsUrl?: string;
}
