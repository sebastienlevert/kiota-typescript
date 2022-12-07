import {NotebookLinks, OnenoteEntityHierarchyModel, OnenoteSection, SectionGroup} from './index';
import {OnenoteUserRole} from './onenoteUserRole';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Notebook extends OnenoteEntityHierarchyModel, Partial<Parsable> {
    /** Indicates whether this is the user's default notebook. Read-only. */
    isDefault?: boolean;
    /** Indicates whether the notebook is shared. If true, the contents of the notebook can be seen by people other than the owner. Read-only. */
    isShared?: boolean;
    /** The links property */
    links?: NotebookLinks;
    /** The section groups in the notebook. Read-only. Nullable. */
    sectionGroups?: SectionGroup[];
    /** The URL for the sectionGroups navigation property, which returns all the section groups in the notebook. Read-only. */
    sectionGroupsUrl?: string;
    /** The sections in the notebook. Read-only. Nullable. */
    sections?: OnenoteSection[];
    /** The URL for the sections navigation property, which returns all the sections in the notebook. Read-only. */
    sectionsUrl?: string;
    /** The userRole property */
    userRole?: OnenoteUserRole;
}
