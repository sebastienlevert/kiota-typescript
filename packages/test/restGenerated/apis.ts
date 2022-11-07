import { operation1, operation2, operation3, operation4} from "./operations"
export interface APIs{
    (api:"/admin"):operation1,
    (api:"/admin/serviceAnnouncement"):operation2,
    (api:"/admin/serviceAnnouncement/healthOverviews"):operation3,
    (api:"/admin/serviceAnnouncement/healthOverviews/{serviceHealth-id}",serviceHealthid: string):operation4,
}