import { forwardRef, Fragment } from 'react'

import { FormProps } from '@/types/form'
import { Sector } from '@/types/sector'
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

export const SectorsMenu = forwardRef<
  HTMLButtonElement,
  FormProps<'sector'> & { children?: React.ReactNode }
>(({ ...props }, ref) => {
  const selectedSector = props?.value?.name
  const onSelectChange = (value: Sector) => {
    props.onChange(value)
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="block">
        <Button variant="outline" ref={ref}>
          {selectedSector || 'Select a sector'}
        </Button>
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
                                          <DropdownMenuItem
                                            {...props}
                                            onSelect={() =>
                                              onSelectChange(childChildChildren)
                                            }
                                          >
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
                                <DropdownMenuItem
                                  {...props}
                                  onSelect={() => onSelectChange(childChildren)}
                                >
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
                        <DropdownMenuItem
                          {...props}
                          onSelect={() => onSelectChange(child)}
                        >
                          {child?.name}
                        </DropdownMenuItem>
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
                <DropdownMenuItem
                  {...props}
                  onSelect={() => onSelectChange(value)}
                >
                  {value?.name}
                </DropdownMenuItem>
              </Fragment>
            )
          )}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
})
