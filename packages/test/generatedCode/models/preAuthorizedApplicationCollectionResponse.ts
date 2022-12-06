import {BaseCollectionPaginationCountResponse, PreAuthorizedApplication} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PreAuthorizedApplicationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: PreAuthorizedApplication[];
}
