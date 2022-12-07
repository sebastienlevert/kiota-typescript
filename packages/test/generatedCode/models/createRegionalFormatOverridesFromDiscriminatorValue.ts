import {RegionalFormatOverrides} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRegionalFormatOverridesFromDiscriminatorValue(parseNode: ParseNode | undefined) : RegionalFormatOverrides {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RegionalFormatOverrides();
}
