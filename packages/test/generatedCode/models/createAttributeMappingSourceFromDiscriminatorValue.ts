import {AttributeMappingSource} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAttributeMappingSourceFromDiscriminatorValue(parseNode: ParseNode | undefined) : AttributeMappingSource {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AttributeMappingSource();
}
