import {BaseCollectionPaginationCountResponse, PublicErrorDetail} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PublicErrorDetailCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: PublicErrorDetail[];
}
