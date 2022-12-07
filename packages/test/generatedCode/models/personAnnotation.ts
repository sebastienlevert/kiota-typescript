import {ItemBody, ItemFacet} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PersonAnnotation extends ItemFacet, Partial<Parsable> {
    /** The detail property */
    detail?: ItemBody;
    /** Contains a friendly name for the note. */
    displayName?: string;
    /** The thumbnailUrl property */
    thumbnailUrl?: string;
}
