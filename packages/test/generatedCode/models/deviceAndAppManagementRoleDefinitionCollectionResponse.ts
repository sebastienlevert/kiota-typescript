import {BaseCollectionPaginationCountResponse, DeviceAndAppManagementRoleDefinition} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceAndAppManagementRoleDefinitionCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: DeviceAndAppManagementRoleDefinition[];
}
