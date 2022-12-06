import {Windows10EnterpriseModernAppManagementConfigurationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeWindows10EnterpriseModernAppManagementConfiguration} from './serializeWindows10EnterpriseModernAppManagementConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindows10EnterpriseModernAppManagementConfigurationCollectionResponse(writer: SerializationWriter, windows10EnterpriseModernAppManagementConfigurationCollectionResponse: Windows10EnterpriseModernAppManagementConfigurationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, windows10EnterpriseModernAppManagementConfigurationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", windows10EnterpriseModernAppManagementConfigurationCollectionResponse.value as any, serializeWindows10EnterpriseModernAppManagementConfiguration);
}
