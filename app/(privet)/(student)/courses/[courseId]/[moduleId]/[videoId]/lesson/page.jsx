"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IconChevronLeft, IconChevronRight, IconLoader2 } from "@tabler/icons-react";
import React from "react";
import ReactPlayer from "react-player";

export default function LessonPage({ params }) {
    const [videoLoading, setVideoLoading] = React.useState(false);

    console.log(params);

    React.useEffect(() => {
        setVideoLoading(true);
        setTimeout(() => {
            setVideoLoading(false);
        }, 1000);
    }, []);

    return (
        <div>
            <div className="aspect-video w-full">
                {videoLoading ? (
                    <div className="flex h-full w-full items-center justify-center bg-secondary">
                        <IconLoader2 size={32} className="animate-spin-slow text-base-300" />
                    </div>
                ) : (
                    <ReactPlayer
                        width="100%"
                        height="100%"
                        controls
                        url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                    />
                )}
            </div>
            <div className="my-2 flex w-full items-center justify-between">
                <Button size="xs" className="gap-1 rounded-full py-1 pl-2.5 pr-4 text-[13px] font-normal">
                    <IconChevronLeft size={14} />
                    <span>Previous</span>
                </Button>
                <Button size="xs" className="gap-1 rounded-full py-1 pl-4 pr-2.5 text-[13px] font-normal">
                    <span>Next</span>
                    <IconChevronRight size={14} />
                </Button>
            </div>
            <div className="my-5 flex items-center justify-between border-b border-t border-base-400/20 px-2 py-2">
                <h4>hello</h4>
                <h4>hello</h4>
                <h4>hello</h4>
                <h4>Quiz</h4>
            </div>

            <div>
                <Tabs defaultValue="account" className="w-full">
                    <TabsList className="w-full border border-base-400/20">
                        <TabsTrigger className="w-full" value="account">
                            Description
                        </TabsTrigger>
                        <TabsTrigger className="w-full" value="password">
                            Documentation
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="account">
                        <p className="text-base-300">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, asperiores id dolor
                            corporis quasi excepturi! Tempora omnis in cumque, nesciunt numquam iste praesentium
                            provident dolorum unde, corrupti totam vitae, perferendis eaque id quidem ullam. Nam animi
                            quibusdam numquam hic. Illo saepe nesciunt aperiam aliquam beatae quibusdam veritatis est,
                            animi error maxime laudantium quaerat! Repudiandae tempora facilis est magnam, saepe
                            veritatis explicabo, sunt necessitatibus qui rerum quo. Debitis quasi distinctio facilis
                            amet reprehenderit blanditiis iste aperiam deserunt! Iusto cumque sapiente harum vero
                            architecto molestiae eaque numquam iure magni laudantium dicta magnam animi ullam voluptas,
                            quidem quia, reiciendis corporis? Sapiente fuga officia quidem esse consequatur, corporis
                            velit error libero qui ullam! Iste deserunt eius modi magnam delectus quibusdam facilis,
                            dignissimos tempora, provident nobis animi quidem, possimus illo. Voluptatem reiciendis
                            dolores, odio consequatur doloribus itaque ratione nulla aspernatur, porro magni quaerat nam
                            accusamus unde voluptate? Laborum facere explicabo atque eaque eligendi non sint obcaecati,
                            vero corrupti autem similique aliquid assumenda sed quam ipsam itaque tempore totam eum
                            officia nostrum quis temporibus. Facere repellendus nesciunt quo sit deserunt impedit quis
                            distinctio, nulla, numquam magnam, incidunt tempora placeat eum? Minus perferendis eveniet,
                            commodi, nesciunt voluptatibus eligendi doloremque voluptatem incidunt recusandae,
                            laudantium omnis hic reprehenderit quas?
                        </p>
                    </TabsContent>
                    <TabsContent value="password">
                        <p className="text-base-300">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, asperiores id dolor
                            corporis quasi excepturi! Tempora omnis in cumque, nesciunt numquam iste praesentium
                            provident dolorum unde, corrupti totam vitae, perferendis eaque id quidem ullam. Nam animi
                            quibusdam numquam hic. Illo saepe nesciunt aperiam aliquam beatae quibusdam veritatis est,
                            animi error maxime laudantium quaerat! Repudiandae tempora facilis est magnam, saepe
                            veritatis explicabo, sunt necessitatibus qui rerum quo. Debitis quasi distinctio facilis
                            amet reprehenderit blanditiis iste aperiam deserunt! Iusto cumque sapiente harum vero
                            architecto mo quas?
                        </p>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}
