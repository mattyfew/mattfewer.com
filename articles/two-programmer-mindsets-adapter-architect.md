---
title: "The Two Programmer Mindsets: Adapter & Architect"
description: "Exploring different mindsets that developers must utilize to be mindful, efficient, and productive."
link: "https://medium.com/justeattakeaway-tech/the-two-programmer-mindsets-adapter-architect-eb866593f3ba"
slug: two-programmer-mindsets-adapter-architect
image: /static/img/posts-mf/two-programmer-mindsets-adapter-architect-cover.jpeg
date: "2021-03-17"
---

_This article was originally posted on the [Just Eat Takeaway tech blog](https://medium.com/justeattakeaway-tech/the-two-programmer-mindsets-adapter-architect-eb866593f3ba)._

---

Introduction
============

When a developer approaches a problem, they usually have a clear objective. Fix this bug, create that component, refactor this implementation. We are very goal oriented by nature. We have an objective that we need to get to, and we have to try all the techniques we’ve learned in order to hit that mark. But something that I feel is less discussed is the mindset of a developer: the _way_ we think, rather than _what_ we think, in order to solve a coding problem.

I want to share some thoughts on two specific mindsets that I realized I have been oscillating between for most of my career. But here’s the funny part…I rarely noticed when I was switching between them. Looking back on it, had I realized this paradigm, I might have been able to save myself hours of thinking about the perfect solutions to problems.

To give you an idea of the different stages of software development, I will give a bit of backstory to the project I’ve been working on. Afterwards, we will examine the two programmer mindsets more closely. Finally, I will present some tips on how to utilize the two approaches and how to be more mindful in the process.

My recent journey
=================

Right now, my team is at an interesting point in our long journey. Since June 2019, we’ve been migrating the Takeaway.com food ordering web application to a modern stack of Next.js, React, and Redux Saga. Over the past year, our team has grown to the point where it has become beneficial to split into smaller teams with a more specialized set of responsibilities.

We first started by building the menu & checkout pages of the website. These included the header elements, including location search and account login, and also the menu, cart, and the order submission mechanism.

Over the next 1.5 years, I moved from the team responsible for the menu & checkout experience to the restaurant list page where the user picks which establishment they will order from. Our main challenge for this page was implementing the various filters and sorting mechanisms. After finishing the restaurant list page, I pivoted to the team that handles the development of the common components of the entire website (header, footer, account login, etc).

Each team was responsible for building pages from the ground up. During this period I was mostly in what I started calling the _architect_ mindset.

Once the app started reaching completion, we weren’t building as many new features and mechanisms, and the conventions were mostly stabilized. Instead, we were following what was already in place. We deliberated and agreed to follow the coding conventions that we had established together. You can think of it as that we were building _on top of_ what was already there. This is the other mindset, what I call the _adapter_ mindset.

Two Mindsets
============

After a long time deliberating, I feel the best labels for these two mindsets is the architect and the adapter. Neither mindset is better than the other. The two work together as yin and yang. Both mindsets are utilized by developers of all experience levels. The trick is to be mindful of when it is best to be in one mindset over the other.

Let’s get into it.

Way of the Architect
--------------------

When building an application from scratch, we may assume the following:

*   If a new feature is to be implemented, there is no existing code that you can reuse. You will have to write it yourself.
*   Architectural decisions will carry a lot of weight. You will introduce new conventions.
*   You have some flexibility to introduce packages, plugins, or software that the infrastructure of your app will depend on.

In the architect mindset, you’re not going to be looking into your app for a previous implementation because there won’t be one. Being in the architect mindset means knowing that the path in front of you means exploring new ideas and designing a solution that currently doesn’t exist.

This is when we start whipping out the dry erase markers and get to the whiteboard. You are weighing the decisions of one possible implementation with another. We are thinking about the future of the software — taking one approach now can be referenced until one day it’s prevalent everywhere in your application and increasingly difficult to replace.

Way of the Adapter
------------------

The adapter mindset comes into play when you are working on a more mature application. Code conventions are in place, documentation has been written and rewritten, and you share a certain quality standard among the team members.

When we shift from needing to build something new to extending what is already there, we enter the adapter mindset. This allows us to take keep conventions for certain patterns in mind. They can be as small as preferring `Boolean(foo)` over `!!foo` or how naming our redux action creators in the past tense like `orderSubmitted`, `preferenceSaved`, etc).

In this mindset, we are more focused on using what is already there than building out something completely new or taking a new approach. We are following patterns that have been laid out by previous developers.

This is all with the healthy assumption that you and your team thought strategically about how to build your app. They have made good architectural decisions to allow your software to extend and scale. Part of following the adapter pattern includes determining whether an existing implementation should be reused or if a better and more reusable solution is needed.

Imagine joining a big project that has been active for 2+ years. As the app is being built, the team is adding models, schemas, contracts, constants, utilities, selectors, etc. to implement functionalities. These various functions will be depended upon and utilized throughout the application. As an incoming developer, you may assume that you should follow the conventions that have been laid out for you. This places you in the adapter mindset.

Is one mindset better than the other?
=====================================

You might be quick to think that we want to take the architect mindset most of the time, but I have found that this is not the case. In order to efficiently build a piece of software, a developer must drift back and forth between the two mindsets depending on the task at hand.

Placing a new developer in the architect mindset can be an effective method to find better ways of doing something, whether that be in the development process or in the code itself. On the flip side, a senior developer tasked with working with the existing codebase can also help recognize trends in the way the app is being built.

Developers must utilize both approaches in their day-to-day in order to be efficient and effective.

Switching between the two mindsets
==================================

As we previously deduced, one approach is not better than the other. In fact, as software developers we need a proper handle on both approaches. Sure, a new developer will probably be in the adapter mindset for much of the time as they learn a codebase and how to extend what is already there. Senior developers may greatly benefit from mastering this mindset. A developer that fails to recognize they can reuse a previous implementation is going to end up doing double the work — first by needlessly writing their own implementation and again when they must remove what they wrote when a colleague points out that this logic already exists in the app.

Let’s say that you’ve taken up the task of restoring user preferences from cookies or local storage after refreshing the page. Let’s assume that you have little knowledge about this topic and that the application is decently matured. A smart developer will first research which mechanisms already exist and can be reused. You ask a few colleagues who might have knowledge on the topic and then you look into the code and test the chain of events for the particular flow. These are steps that we take while we are in the adapter mindset.

Then, let’s assume another scenario where you you need to request certain user data from a separate API. You notice that there is no GET request made to this API which also requires authentication, neither of which have been implemented yet. Now you must consider how to extend the existing logic or whether you must implement these mechanisms from scratch. This is the moment where we switch to the architect mindset. We must start thinking about the architectural steps of creating something new, rather than simply use and enhance what is already there.

Some tips
=========

Now that we understand the two mindsets and relationship between them, I have some tips on how to best put our knowledge to use.

Be mindful of the way you are thinking when working on a task
-------------------------------------------------------------

Quite often we find ourselves so focused on finding a solution that we don’t stop to consider _how_ we are approaching a problem. It takes practice to zoom out for a moment and think “_Am I going about this the right way? Have I checked in the codebase for a similar implementation that can be reused? Or am I just coding away on autopilot?_” Asking yourself this type of questions will help you reflect on your own approach - something I encourage everyone to do, not just developers.

If you find you made a mistake because you weren’t in the right mindset, don’t sweat it
---------------------------------------------------------------------------------------

My inspiration for this article came from having been stuck in the adapter mindset for a day or two myself. I kept looking for an existing way to solve my problem. I kept trying to look at previous implementations from different perspectives, but I couldn’t get to a comfortable solution. I was starting to agonize over how much time I was taking, how I couldn’t get the app to behave the way I wanted; I started judging the amount of progress I had made.

Then a lightbulb 💡 went on in my head. I was trying to extend what currently existed in the codebase. Only after many instances of trial and error did I realize that I was approaching the problem from the wrong mindset. I needed to approach the problem from the architect mindset. I had done my research and testing, and determined that the solution did not exist in the codebase. I would have to build it myself.

This late realization happens more often than you would think. Don’t beat yourself up if it took you a bit of time to make the connection like I did. This is all part of growing as a developer. The important thing is that you note these moments in your career and learn from them.

Practice mindfulness daily
--------------------------

In order to program more mindfully, we must practice mindfulness when we are not coding. For thousands of years, our Buddhist ancestors touted the benefits of meditation to our mind and body.

While your development server is spinning up or when you are waiting for a webpage to load, close your eyes for a moment, concentrate on your breath, and be present for a moment. Take breaks when you feel tired. Go for a walk or exercise when you are feeling stiff. Listen to your body. Doing so will give you the energy and mental clarity to tackle coding problems with a fresh and focused mind.

Reflect on your process
-----------------------

When I first started working at JET, a colleague shared with me his daily and weekly approach for getting things done. He said that he has a “personal stand up” every morning where he examines his list of ToDos, and decides on priorities. At the end of the week, he sets aside a few hours to reflect on the previous week, answering questions like:

*   What went well? What didn’t go so well?
*   Which activities are giving you energy and which are taking energy away from you?
*   Are you maintaining good habits? Have you developed any bad ones? How can you fix them?
*   Did you make any realizations during the week that you want to focus on for the approaching week?

Asking these types of questions and actively reflecting on your own processes is a game changer as far as being mindful of how you work and go about your day instead of being on autopilot, checking off ToDos without much thought into why you are doing it, or if there is a better way.

I appreciate how these concepts are reflected in Scrum. As a practitioner of scrum and agile, you will participate in ceremonies like Retrospective, where the team will reflect on the previous sprint and ask similar questions to the ones stated above. Dedicating time to reflect on how you felt about your previous day/week/sprint is an ingenious tactic to take an honest look at how you or your team work.

Conclusion
==========

Sometimes it feels as if you are expected to know all the answers about your codebase. We fall into this thinking pattern where we need to work as fast as possible, comparing ourselves to our colleagues, and forgetting to take time to reflect on what we are actually doing. Working this way will build stress and can lead to burnout.

That’s why it’s important to _think about how you think_. When you are planning how to tackle a coding task, ask yourself “_Which mindset do I need to be in right now? Which approach will most likely lead me to a high quality solution?_”

Software development is all about trial and error. It’s always cognitively demanding. We need take care of our mind and body if we want to be effective at work and in our daily lives. Taking time to step back and reflect on how — rather than what — you think will lead you to some enlightening realizations about your own process.

_Got feedback? Suggestions? Just want to say hi? Reach out to me on_ [_LinkedIn_](https://www.linkedin.com/in/mattfewer/) _or_ [_Twitter_](https://twitter.com/mattyfew)_!_
