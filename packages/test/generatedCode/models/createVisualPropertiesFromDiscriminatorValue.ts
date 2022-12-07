import {VisualProperties} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createVisualPropertiesFromDiscriminatorValue(parseNode: ParseNode | undefined) : VisualProperties {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new VisualProperties();
}
