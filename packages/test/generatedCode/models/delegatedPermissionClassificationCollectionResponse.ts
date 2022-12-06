import {BaseCollectionPaginationCountResponse, DelegatedPermissionClassification} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DelegatedPermissionClassificationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: DelegatedPermissionClassification[];
}
