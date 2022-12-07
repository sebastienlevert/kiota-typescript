import {deserializeIntoEducationalActivity} from './deserializeIntoEducationalActivity';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoItemAddress} from './deserializeIntoItemAddress';
import {deserializeIntoItemEmail} from './deserializeIntoItemEmail';
import {deserializeIntoItemPatent} from './deserializeIntoItemPatent';
import {deserializeIntoItemPhone} from './deserializeIntoItemPhone';
import {deserializeIntoItemPublication} from './deserializeIntoItemPublication';
import {deserializeIntoLanguageProficiency} from './deserializeIntoLanguageProficiency';
import {deserializeIntoPersonAnnotation} from './deserializeIntoPersonAnnotation';
import {deserializeIntoPersonAnnualEvent} from './deserializeIntoPersonAnnualEvent';
import {deserializeIntoPersonAward} from './deserializeIntoPersonAward';
import {deserializeIntoPersonCertification} from './deserializeIntoPersonCertification';
import {deserializeIntoPersonInterest} from './deserializeIntoPersonInterest';
import {deserializeIntoPersonName} from './deserializeIntoPersonName';
import {deserializeIntoPersonWebsite} from './deserializeIntoPersonWebsite';
import {deserializeIntoProjectParticipation} from './deserializeIntoProjectParticipation';
import {deserializeIntoSkillProficiency} from './deserializeIntoSkillProficiency';
import {deserializeIntoUserAccountInformation} from './deserializeIntoUserAccountInformation';
import {deserializeIntoWebAccount} from './deserializeIntoWebAccount';
import {deserializeIntoWorkPosition} from './deserializeIntoWorkPosition';
import {Profile} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoProfile(profile: Profile | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(profile),
        "account": n => { profile.account = n.getCollectionOfObjectValuesFromMethod(deserializeIntoUserAccountInformation) as any ; },
        "addresses": n => { profile.addresses = n.getCollectionOfObjectValuesFromMethod(deserializeIntoItemAddress) as any ; },
        "anniversaries": n => { profile.anniversaries = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPersonAnnualEvent) as any ; },
        "awards": n => { profile.awards = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPersonAward) as any ; },
        "certifications": n => { profile.certifications = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPersonCertification) as any ; },
        "educationalActivities": n => { profile.educationalActivities = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEducationalActivity) as any ; },
        "emails": n => { profile.emails = n.getCollectionOfObjectValuesFromMethod(deserializeIntoItemEmail) as any ; },
        "interests": n => { profile.interests = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPersonInterest) as any ; },
        "languages": n => { profile.languages = n.getCollectionOfObjectValuesFromMethod(deserializeIntoLanguageProficiency) as any ; },
        "names": n => { profile.names = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPersonName) as any ; },
        "notes": n => { profile.notes = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPersonAnnotation) as any ; },
        "patents": n => { profile.patents = n.getCollectionOfObjectValuesFromMethod(deserializeIntoItemPatent) as any ; },
        "phones": n => { profile.phones = n.getCollectionOfObjectValuesFromMethod(deserializeIntoItemPhone) as any ; },
        "positions": n => { profile.positions = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWorkPosition) as any ; },
        "projects": n => { profile.projects = n.getCollectionOfObjectValuesFromMethod(deserializeIntoProjectParticipation) as any ; },
        "publications": n => { profile.publications = n.getCollectionOfObjectValuesFromMethod(deserializeIntoItemPublication) as any ; },
        "skills": n => { profile.skills = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSkillProficiency) as any ; },
        "webAccounts": n => { profile.webAccounts = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWebAccount) as any ; },
        "websites": n => { profile.websites = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPersonWebsite) as any ; },
    }
}
