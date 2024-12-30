"use client"

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export function CalForm({ calLink }: { calLink: string }) {
    useEffect(()=>{
        (async function () {
            const cal = await getCalApi({"namespace":"project-planning"});
            cal("ui", {
                "theme":"light",
                "cssVarsPerTheme":{ 
                    "light":{"cal-brand":"#5b21b6"},
                    "dark":{"cal-brand":"#5b21b6"} 
                },
                "hideEventTypeDetails":false,
                "layout":"month_view"
            });
        })();
    }, [])

    return <Cal namespace="project-planning"
        calLink={calLink}
        style={{width:"100%",height:"100%",overflow:"scroll"}}
        config={{"layout":"month_view","theme":"light"}}
    />;
};
