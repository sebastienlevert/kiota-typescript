import {CompanyDetail} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCompanyDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) : CompanyDetail {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CompanyDetail();
}
