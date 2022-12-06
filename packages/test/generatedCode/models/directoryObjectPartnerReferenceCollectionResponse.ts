import {BaseCollectionPaginationCountResponse, DirectoryObjectPartnerReference} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DirectoryObjectPartnerReferenceCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: DirectoryObjectPartnerReference[];
}
