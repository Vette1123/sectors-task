import { Fragment } from 'react'

import { SECTORS } from '@/lib/constants'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import SubMenuOptions from '@/components/sub-content'

export function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          {Object.entries(SECTORS).map(([key, value]) =>
            value?.children?.length ? (
              <Fragment key={key}>
                <SubMenuOptions menuItemTitle={value?.name}>
                  {value?.children?.map((child, index) =>
                    child?.children?.length ? (
                      <Fragment key={index}>
                        <SubMenuOptions menuItemTitle={child?.name}>
                          {child?.children?.map((childChildren, index) =>
                            childChildren?.children?.length ? (
                              <Fragment key={index}>
                                <SubMenuOptions
                                  menuItemTitle={childChildren?.name}
                                >
                                  {childChildren?.children?.map(
                                    (childChildChildren, index) =>
                                      childChildChildren?.children?.length ? (
                                        <Fragment key={index}>
                                          <SubMenuOptions
                                            menuItemTitle={
                                              childChildChildren?.name
                                            }
                                          >
                                            {childChildChildren?.name}
                                          </SubMenuOptions>
                                        </Fragment>
                                      ) : (
                                        <Fragment
                                          key={`${childChildChildren?.name}-${index}`}
                                        >
                                          <DropdownMenuItem>
                                            {childChildChildren?.name}
                                          </DropdownMenuItem>
                                          {index !==
                                            childChildren?.children?.length -
                                              1 && <DropdownMenuSeparator />}
                                        </Fragment>
                                      )
                                  )}
                                </SubMenuOptions>
                                {index !== child?.children?.length - 1 && (
                                  <DropdownMenuSeparator />
                                )}
                              </Fragment>
                            ) : (
                              <Fragment key={`${childChildren?.name}-${index}`}>
                                <DropdownMenuItem>
                                  {childChildren?.name}
                                </DropdownMenuItem>
                                {index !== child?.children?.length - 1 && (
                                  <DropdownMenuSeparator />
                                )}
                              </Fragment>
                            )
                          )}
                        </SubMenuOptions>
                        {index !== value?.children?.length - 1 && (
                          <DropdownMenuSeparator />
                        )}
                      </Fragment>
                    ) : (
                      <Fragment key={`${child?.name}-${index}`}>
                        <DropdownMenuItem>{child?.name}</DropdownMenuItem>
                        {index !== value?.children?.length - 1 && (
                          <DropdownMenuSeparator />
                        )}
                      </Fragment>
                    )
                  )}
                </SubMenuOptions>
                {key !== Object.keys(SECTORS).at(-1) && (
                  <DropdownMenuSeparator />
                )}
              </Fragment>
            ) : (
              <Fragment key={`${value?.name}`}>
                <DropdownMenuItem>{value?.name}</DropdownMenuItem>
              </Fragment>
            )
          )}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
