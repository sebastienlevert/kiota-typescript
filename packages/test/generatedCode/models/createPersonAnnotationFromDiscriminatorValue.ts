import {PersonAnnotation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPersonAnnotationFromDiscriminatorValue(parseNode: ParseNode | undefined) : PersonAnnotation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PersonAnnotation();
}
