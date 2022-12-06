import {BaseCollectionPaginationCountResponse, RoleDefinition} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface RoleDefinitionCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: RoleDefinition[];
}
