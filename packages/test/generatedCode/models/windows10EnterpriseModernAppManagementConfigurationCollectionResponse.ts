import {BaseCollectionPaginationCountResponse, Windows10EnterpriseModernAppManagementConfiguration} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Windows10EnterpriseModernAppManagementConfigurationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: Windows10EnterpriseModernAppManagementConfiguration[];
}
