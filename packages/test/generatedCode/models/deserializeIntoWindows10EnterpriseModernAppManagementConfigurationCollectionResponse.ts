import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoWindows10EnterpriseModernAppManagementConfiguration} from './deserializeIntoWindows10EnterpriseModernAppManagementConfiguration';
import {Windows10EnterpriseModernAppManagementConfigurationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindows10EnterpriseModernAppManagementConfigurationCollectionResponse(windows10EnterpriseModernAppManagementConfigurationCollectionResponse: Windows10EnterpriseModernAppManagementConfigurationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(windows10EnterpriseModernAppManagementConfigurationCollectionResponse),
        "value": n => { windows10EnterpriseModernAppManagementConfigurationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWindows10EnterpriseModernAppManagementConfiguration) as any ; },
    }
}
