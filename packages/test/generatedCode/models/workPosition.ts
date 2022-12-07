import {ItemFacet, PositionDetail, RelatedPerson} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkPosition extends ItemFacet, Partial<Parsable> {
    /** Categories that the user has associated with this position. */
    categories?: string[];
    /** Colleagues that are associated with this position. */
    colleagues?: RelatedPerson[];
    /** The detail property */
    detail?: PositionDetail;
    /** Denotes whether or not the position is current. */
    isCurrent?: boolean;
    /** The manager property */
    manager?: RelatedPerson;
}
