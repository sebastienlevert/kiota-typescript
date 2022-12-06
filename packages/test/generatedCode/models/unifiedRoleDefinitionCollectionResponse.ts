import {BaseCollectionPaginationCountResponse, UnifiedRoleDefinition} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UnifiedRoleDefinitionCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: UnifiedRoleDefinition[];
}
